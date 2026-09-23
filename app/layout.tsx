import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XOREN Startups",
  description:
    "The XOREN startup portfolio: focused AI-native SaaS products built for technical operators, production workflows, and serious execution.",
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
      <body>{children}</body>
    </html>
  );
}
