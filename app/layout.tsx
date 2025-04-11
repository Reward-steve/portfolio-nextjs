"use client";

import Navigation from "@/app/components/navbar";
import PageHolder from "./components/pageHolder";
import LoadingProvider from "./context/loadingProvider";
import { ThemeProvider } from "next-themes";
import "../app/globals.css"; // Fixed path
import "../app/mQuery.css"; // Fixed path

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpeg" sizes="any" />
        <title>Reward Stephen | Frontend Developer</title>
        <meta
          name="description"
          content="I'm Reward Stephen, a frontend developer building beautiful and functional web applications."
        />
      </head>
      <body className="antialiased bg-[#c6e5ff] text-[#0f172b] dark:text-[#c6e5ff] dark:bg-[#0f172b]">
        <LoadingProvider>
          <ThemeProvider attribute="class">
            <Navigation />
            <PageHolder>{children}</PageHolder>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
