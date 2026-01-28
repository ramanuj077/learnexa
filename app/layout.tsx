import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learnexa - Empowering Schools, Inspiring Futures",
  description: "The all-in-one cloud platform to centralize administration, enhance student performance, and bridge the gap between parents and teachers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white transition-colors duration-200 antialiased">
        {children}
      </body>
    </html>
  );
}
