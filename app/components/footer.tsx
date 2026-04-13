interface FooterProps{
    children: React.ReactNode;
}

export function FooterSite({ children }: FooterProps) {
    return (
        <footer className="flex w-full bg-blue-950 text-blue-100 py-4">
            <div className="max-w-6xl mx-auto px-4">
                {children}
            </div>
        </footer>
    );
}