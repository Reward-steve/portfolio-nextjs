import ClientOnly from "../components/clientOnly";
import LoadingProvider from "./context/loadingProvider";
import { ThemeProvider } from "next-themes";
import Navigation from "../components/navbar";
import PageHolder from "../components/pageHolder";
import "./style/globals.css";

export const metadata = {
  title: "Reward Stephen | Frontend Developer",
  description:
    "I'm Reward Stephen, a frontend developer building beautiful and functional web applications.",
  keywords: [
    "Reward Stephen",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  openGraph: {
    title: "Reward Stephen | Frontend Developer",
    description:
      "Explore Reward Stephen's portfolio, showcasing projects and skills as a frontend developer.",
    url: "https://my-portfolio-website-chi-kohl.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://my-portfolio-website-chi-kohl.vercel.app/website.png",
        width: 1200,
        height: 630,
        alt: "Reward Stephen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RewardStephen",
    title: "Reward Stephen | Frontend Developer",
    description:
      "Explore Reward Stephen's portfolio, showcasing projects and skills as a frontend developer.",
    images: ["https://my-portfolio-website-chi-kohl.vercel.app/website.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="nIAFda20iF_m5takSxiHmHOR1QC2tT4qSM-AldTNmKQ"
        />
      </head>
      <body className="antialiased bg-[#ffffff] text-[#0f172b] dark_bg dark_tx">
        <ClientOnly>
          <LoadingProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={true} // Enable system preference
            >
              <Navigation />
              <PageHolder>{children}</PageHolder>
            </ThemeProvider>
          </LoadingProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
