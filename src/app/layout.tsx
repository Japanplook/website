import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const metadata: Metadata = {
  title: "PLOOK — Fresh & Quality Produce You Can Trust",
  description:
    "PLOOK builds AI-powered farming infrastructure for Thailand — embedding, monitoring, contracting, and delivering fresh produce at scale.",
  metadataBase: new URL("https://plook.co"),
  openGraph: {
    title: "PLOOK — Fresh & Quality Produce You Can Trust",
    description:
      "PLOOK builds AI-powered farming infrastructure for Thailand — embedding, monitoring, contracting, and delivering fresh produce at scale.",
    images: [{ url: "/assets/PLOOK-SYMBOL.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
