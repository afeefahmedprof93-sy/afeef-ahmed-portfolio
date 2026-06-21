import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afeef Ahmed Jarif | Software QA Engineer",
  description:
    "Professional portfolio of Afeef Ahmed Jarif, a Software QA Engineer specializing in manual, automation, API, performance, and AI-driven QA workflows.",
  keywords: [
    "Afeef Ahmed Jarif",
    "Software QA Engineer",
    "Manual Testing",
    "Automation Testing",
    "AI-Driven QA",
    "Playwright",
    "TypeScript",
    "Selenium",
    "API Testing",
    "Postman",
    "k6",
  ],
  authors: [{ name: "Afeef Ahmed Jarif" }],
  creator: "Afeef Ahmed Jarif",
  openGraph: {
    title: "Afeef Ahmed Jarif | Software QA Engineer",
    description:
      "Software QA Engineer portfolio featuring AI-driven QA workflows, testing skills, automation projects, and work samples.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
