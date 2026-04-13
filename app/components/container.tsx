interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

// Conteudo principal do Dash
export function ContainerDashboard({ children, className = "" }: ContainerProps) {
    return (
      <div className={`min-h-screen flex flex-row bg-blue-950 text-blue-200 overflow-hidden ${className}`}>        
        {children}
      </div>
    );
  }

// Conteudo principal Site
export function ContainerSite({ children, className = "" }: ContainerProps) {
    return (
      <div className={`min-h-screen flex flex-col bg-blue-200 text-blue-950 ${className}`}>        
        {children}
      </div>
    );
  }

// Conteudo w-full dentro do container, para se adaptar a diferentes larguras de tela
export function Section({ children, className = "" }: ContainerProps) {
    return (
      <section className={`w-full ${className}`}>
        {children}
      </section>
    );
  }
  
  // Conteudo que vai detro das sections ja centrado e com padding, para manter o layout consistente em diferentes telas
  export function InnerContainer({ children, className = "" }: ContainerProps) {
    return (
      <div className={`max-w-6xl mx-auto px-4 w-full ${className}`}>
        {children}
      </div>
    );
  }