import { ContainerSite } from "../components/container";
import { FooterSite } from "../components/footer";
import { HeaderSite } from "../components/header";

interface LayoutSiteProps {
    children: React.ReactNode;
}

export default function LayoutSite({ children }: LayoutSiteProps) {
    return (
        <ContainerSite>
            <HeaderSite>
                <h1 className="text-2xl font-bold">Menu</h1>
            </HeaderSite>

            <main className="flex-1">
                {children}
            </main>

            <FooterSite>
                <p className="text-center text-sm">&copy; 2026 Meu Site. Todos os direitos reservados.</p>
            </FooterSite>
        </ContainerSite>
    );
}