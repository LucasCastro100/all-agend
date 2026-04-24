import { LogIn } from "lucide-react";
import { ContainerSite } from "../../components/app/container";
import { FooterSite } from "../../components/app/footer";
import { HeaderSite } from "../../components/app/header";

interface LayoutSiteProps {
  children: React.ReactNode;
}

export default function LayoutSite({ children }: LayoutSiteProps) {
  return (
    <ContainerSite>
      <HeaderSite>
        <ul className="flex gap-4">
          <li className="flex flex-row gap-2 items-center justify-center">
            <LogIn />
            <h1 className="text-2xl font-bold">Login</h1>
          </li>
        </ul>
      </HeaderSite>

      <main className="flex-1">{children}</main>

      <FooterSite>
        <p className="text-center text-sm">
          &copy; 2026 Meu Site. Todos os direitos reservados.
        </p>
      </FooterSite>
    </ContainerSite>
  );
}
