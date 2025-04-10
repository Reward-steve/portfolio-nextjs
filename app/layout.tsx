import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mQuery.css";
import Navigation from "@/app/components/navbar";
import PageHolder from "./components/pageHolder";
import { Inter, Roboto } from "next/font/google";
import LoadingProvider from "./context/loadingProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: Use CSS variable
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose specific weights
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reward Stephen | Frontend Developer",
  description:
    "I'm Reward Stephen, a frontend developer building beautiful and functional web applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable} ${roboto.className}`}
      >
        <LoadingProvider>
          <Navigation />
          <PageHolder>{children}</PageHolder>
        </LoadingProvider>
      </body>
    </html>
  );
}
