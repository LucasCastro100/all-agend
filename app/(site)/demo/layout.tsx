import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo All Agend",
  description: "Teste nosso sistema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return  children ;
}
