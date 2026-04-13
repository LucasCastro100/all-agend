import { ContainerSite } from "../components/container";

interface LayoutSiteProps {
    children: React.ReactNode;
}

export default function LayoutSite({ children }: LayoutSiteProps) {
    return (
        <ContainerSite>
            {children}
        </ContainerSite>
    );
}