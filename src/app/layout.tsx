import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLOOK — Fresh & Quality Produce You Can Trust",
  description:
    "PLOOK builds AI-powered farming infrastructure for Thailand — embedding, monitoring, contracting, and delivering fresh produce at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
