import Link from "next/link";

interface HeaderProps {
  children: React.ReactNode;
}

export function HeaderSite({ children }: HeaderProps) {
  return (
    <header className="flex w-full bg-blue-950 text-blue-100 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center w-full">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">Ideias<span className="text-sky-500">Dev</span></h1>
        </Link>

        <nav>
          {children}
        </nav>
      </div>
    </header>
  );
}

export function HeaderDashboard({ children }: HeaderProps) {
  return (
    <header className="flex w-full bg-blue-950 text-blue-200 py-4">
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </header>
  );
}
