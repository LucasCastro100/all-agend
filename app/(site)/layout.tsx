import { Nunito } from 'next/font/google';
import { ContainerSite } from "../../components/app/container";
import { FooterSite } from "../../components/app/footer";
import { HeaderSite } from "../../components/app/header";

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
});

interface LayoutSiteProps {
    children: React.ReactNode;
}

export default function LayoutSite({ children }: LayoutSiteProps) {
    return (        
        <ContainerSite className={nunito.className}>
            <HeaderSite>
                <h1 className="text-2xl font-bold">Menu</h1>
            </HeaderSite>

            <main className="flex-1">
                {children}
            </main>

            <FooterSite>
                <p className="text-center text-sm">
                    &copy; 2026 Meu Site. Todos os direitos reservados.
                </p>
            </FooterSite>
        </ContainerSite>
    );
}