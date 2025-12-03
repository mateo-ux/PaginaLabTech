import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Agregar la fuente Space Age desde Google Fonts
export const metadata: Metadata = {
  title: "Reparación de dispocitivos Mac, iMac o Multimarca especializada",
  description: "Diagnóstico, reparación y mantenimiento de dispositivos Mac, iMac o Multimarca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/space-age"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}