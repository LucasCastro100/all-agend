import { ContainerDashboard } from "../../components/app/container";

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