import { Button } from "@/components/ui/button";
import { InnerContainer, Section } from "../../components/app/container";

export default function Home() {
  return (
    <Section>
      <InnerContainer>
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-950">
          Gerencie como no <span className="text-blue-600">Trello</span>,
          cronometre como no <span className="text-sky-500">Clockify</span>.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          O All-Agend une o poder dos quadros visuais com o rastreamento de
          tempo preciso em uma única plataforma. Organize suas entregas e saiba
          exatamente quanto tempo gasta em cada uma.
        </p>
        <div className="flex gap-4 mt-8">
          <Button variant="dash" size="lg">
            Começar Agora
          </Button>
          <Button variant="outline" size="lg">
            Ver Demo
          </Button>
        </div>
      </InnerContainer>
    </Section>
  );
}
