import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-950 text-white px-4">            
            <h1 className="text-9xl font-extrabold tracking-widest text-white relative">
                404
                <span className="absolute inset-0 text-blue-500 blur-xl opacity-50">404</span>
            </h1>

            <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute mb-20">
                Página não encontrada
            </div>

            <h2 className="mt-8 text-2xl font-light text-blue-200">
                Você chegou ao limite do universo conhecido.
            </h2>

            <Link
                href="/"
                className="mt-10 px-4 py-2 border border-blue-200 text-blue-200 rounded-md bg-blue-600 transition-all duration-300 font-bold uppercase tracking-widest"
            >
                Resgate Imediato
            </Link>
        </div>
    );
}