interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'site' | 'dash' | 'outline';
    children: React.ReactNode;
  }
  
  export default function Button({ variant = 'site', children, className = "", ...props }: ButtonProps) {
    
    // Base de estilos comuns a todos os botões
    const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50";
  
    // Dicionário de variantes
    const variants = {
      // Botão para o Site (Claro): Azul forte e sólido
      site: "bg-blue-700 text-white hover:bg-blue-800 shadow-md",
      
      // Botão para o Dashboard (Escuro): Azul elétrico/neon que brilha no fundo escuro
      dash: "bg-sky-500 text-indigo-950 hover:bg-sky-400 font-bold shadow-[0_0_15px_rgba(14,165,233,0.3)]",
      
      // Variante vazada (apenas bordas)
      outline: "border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-100"
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`} 
        {...props}
      >
        {children}
      </button>
    );
  }