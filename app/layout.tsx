"use client";
import { metadata } from "./api/data/data";
import Navigation from "./components/navbar";
import PageHolder from "./components/pageHolder";
import LoadingProvider from "./context/loadingProvider";
import { ThemeProvider } from "next-themes";
import Head from "next/head"; // Import Head for proper handling of metadata
import "./style/globals.css";
import "./style/mQuery.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Explore Reward Stephen's portfolio" />
        <meta
          name="keywords"
          content="Frontend Developer, Portfolio, React Developer, Next.js"
        />
        <meta name="author" content="Reward Stephen" />
        <link rel="icon" href="/icon.jpeg" sizes="any" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </Head>
      <body className="antialiased bg-[#ffffff] text-[#0f172b] dark_bg dark_tx">
        <LoadingProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light" // Set a default theme
            enableSystem={true} // Enable system preference
          >
            <Navigation />
            <PageHolder>{children}</PageHolder>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
