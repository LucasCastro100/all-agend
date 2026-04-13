import { ContainerDashboard } from "../components/container";

interface LayoutDashboardProps {
    children: React.ReactNode;
}

export default function LayoputDashboard({ children }: LayoutDashboardProps) {
    return (
        <ContainerDashboard>
            {children}
        </ContainerDashboard>
    );
}