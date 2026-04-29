"use client"

import React, { useState, useEffect } from "react";
import { Reorder, AnimatePresence } from "framer-motion";
import { 
  Plus, Clock, Trash2, GripVertical, 
  Play, Pause, CheckCircle2, ArrowRightCircle 
} from "lucide-react";
import { v4 as uuidv4 } from 'uuid';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CardTimer = ({ card }: { card: any }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (card.isRunning && card.lastStarted) {
      interval = setInterval(() => {
        const currentSession = Math.floor((Date.now() - card.lastStarted) / 1000);
        setSeconds(card.totalElapsed + currentSession);
      }, 1000);
    } else {
      setSeconds(card.totalElapsed);
    }
    return () => clearInterval(interval);
  }, [card.isRunning, card.lastStarted, card.totalElapsed]);

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const secs = s % 60;
    return `${m.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Badge variant={card.isRunning ? "default" : "secondary"} className={card.isRunning ? "bg-green-600 animate-pulse" : ""}>
      <Clock className="mr-1 h-3 w-3" /> {format(seconds)}
    </Badge>
  );
};

export default function DemoPage() {
  const [columns, setColumns] = useState<{ [key: string]: any[] }>({
    todo: [],
    doing: [],
    done: [],
  });
  const [newTaskName, setNewTaskName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const all = Object.values(columns).flat();
      const total = all.reduce((acc, c) => {
        const session = (c.isRunning && c.lastStarted) ? Math.floor((Date.now() - c.lastStarted) / 1000) : 0;
        return acc + c.totalElapsed + session;
      }, 0);
      setTotalTime(total);
    }, 1000);
    return () => clearInterval(interval);
  }, [columns]);

  useEffect(() => {
    const saved = localStorage.getItem("kanban-timer-storage");
    if (saved) setColumns(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("kanban-timer-storage", JSON.stringify(columns));
  }, [columns]);

  const createCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskName) return;
    const newCard = { id: uuidv4(), nome: newTaskName, totalElapsed: 0, lastStarted: Date.now(), isRunning: true };
    setColumns(prev => ({ ...prev, todo: [newCard, ...prev.todo] }));
    setNewTaskName("");
    setIsModalOpen(false);
  };

  const moveCard = (from: string, to: string, card: any) => {
    let updatedCard = { ...card };
    if (to === 'done' && card.isRunning) {
      const session = Math.floor((Date.now() - card.lastStarted) / 1000);
      updatedCard = { ...card, isRunning: false, totalElapsed: card.totalElapsed + session, lastStarted: null };
    }

    setColumns(prev => ({
      ...prev,
      [from]: prev[from].filter(c => c.id !== card.id),
      [to]: [updatedCard, ...prev[to]]
    }));
  };

  const toggleTimer = (colId: string, cardId: string) => {
    setColumns(prev => ({
      ...prev,
      [colId]: prev[colId].map(c => {
        if (c.id === cardId) {
          if (c.isRunning) {
            const session = Math.floor((Date.now() - c.lastStarted) / 1000);
            return { ...c, isRunning: false, totalElapsed: c.totalElapsed + session, lastStarted: null };
          }
          return { ...c, isRunning: true, lastStarted: Date.now() };
        }
        return c;
      })
    }));
  };

  const formatTotal = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const rs = s % 60;
    return `${h}h ${m}m ${rs}s`;
  };

  // Helper para definir a cor da borda baseada na coluna
  const getBorderColor = (colId: string) => {
    switch (colId) {
      case 'todo': return 'border-l-red-500';
      case 'doing': return 'border-l-blue-500';
      case 'done': return 'border-l-green-500';
      default: return 'border-l-slate-300';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-blue-950">Task Timer Pro</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Tempo Geral: <span className="font-mono font-bold text-blue-600">{formatTotal(totalTime)}</span>
          </div>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" /> Nova Tarefa
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={createCard} className="space-y-4">
              <h2 className="text-lg font-bold">O que vamos rastrear?</h2>
              <Input placeholder="Nome da tarefa..." value={newTaskName} onChange={e => setNewTaskName(e.target.value)} autoFocus />
              <Button type="submit" className="w-full">Iniciar Agora</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(['todo', 'doing', 'done'] as const).map(col => (
          <div key={col} className="bg-slate-50/50 p-4 rounded-2xl border min-h-[500px]">
            <h3 className="text-xs font-black uppercase text-slate-400 mb-4 px-2 flex justify-between">
              {col === 'todo' ? 'Não Concluído' : col === 'doing' ? 'Em Andamento' : 'Concluído'}
              <Badge variant="outline" className="text-[10px]">{columns[col].length}</Badge>
            </h3>

            {/* A LOGICA DE REORDER FOI MANTIDA, MAS O ARRASTAR FOI DESATIVADO VIA PROPS NO ITEM */}
            <Reorder.Group 
              axis="y" 
              values={columns[col]} 
              onReorder={(newOrder) => setColumns(prev => ({ ...prev, [col]: newOrder }))}
              className="space-y-3"
            >
              <AnimatePresence mode="popLayout">
                {columns[col].map(card => (
                  <Reorder.Item 
                    key={card.id} 
                    value={card}
                    // drag={false} <- Desativa o arraste
                    drag={false} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{ cursor: 'default' }} // Remove o cursor de 'grab'
                  >
                    <Card className={`shadow-sm border-l-4 ${getBorderColor(col)} group`}>
                      <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
                        <div className="flex items-center gap-2 truncate">
                          {/* Ícone mantido apenas visualmente, sem funcionalidade de drag ativa */}
                          <GripVertical className="h-4 w-4 text-slate-300 opacity-50" />
                          <CardTitle className="text-sm truncate">{card.nome}</CardTitle>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-4 pt-0 space-y-4">
                        <div className="flex justify-between items-center">
                          <CardTimer card={card} />
                          
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {col !== 'done' && (
                              <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => toggleTimer(col, card.id)}>
                                {card.isRunning ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
                              </Button>
                            )}

                            {col === 'todo' && (
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-500" onClick={() => moveCard('todo', 'doing', card)}>
                                <ArrowRightCircle size={16} />
                              </Button>
                            )}

                            {col !== 'done' && (
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600" onClick={() => moveCard(col, 'done', card)}>
                                <CheckCircle2 size={16} />
                              </Button>
                            )}
                            
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-300 hover:text-red-500" onClick={() => setColumns(prev => ({ ...prev, [col]: prev[col].filter(c => c.id !== card.id) }))}>
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Reorder.Item>
                ))}
              </AnimatePresence>
            </Reorder.Group>
          </div>
        ))}
      </div>
    </div>
  );
}