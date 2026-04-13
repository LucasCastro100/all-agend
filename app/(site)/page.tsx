import Button from "../components/button";
import { Section } from "../components/container";

export default function Home() {
  return (
    <Section className="p-4 grid grid-cols-3 gap-4">
      <Button variant="site">
        Ver Planos
      </Button>

      <Button variant="dash">
        Novo Relatório
      </Button>

      <Button variant="outline">
        Cancelar
      </Button>
    </Section>
  )
}
