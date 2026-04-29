import { Button } from "@/components/ui/button";
import { InnerContainer, Section } from "../../components/app/container";
import Link from "next/link";

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
          <Link href={"/"}>
            <Button variant="dash" size="lg">
              Começar Agora
            </Button>
          </Link>

          <Link href={"/demo"}>
            <Button variant="outline" size="lg">
              Ver Demo
            </Button>
          </Link>
        </div>
      </InnerContainer>
    </Section>
  );
}
