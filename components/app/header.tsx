interface HeaderProps{
    children: React.ReactNode;
}

export function HeaderSite({ children }: HeaderProps) {
    return (
        <header className="flex w-full bg-blue-950 text-blue-100 py-4">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center w-full">                
                <div className="text-xl font-bold">Logo</div>
                
                <nav>
                    <ul className="flex gap-4">
                        {children}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export function HeaderDashboard({ children }: HeaderProps) {
    return (
        <header className="flex w-full bg-blue-950 text-blue-200 py-4">
            <div className="max-w-6xl mx-auto px-4">
                {children}
            </div>
        </header>
    );
}