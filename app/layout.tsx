import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Docs Manager - Animated | Pushkar.live",
  title: "Docs ToDo Manager - Animated | irshad.live",
  description: "Created by Mohammad Irshad Aalam| FulllStack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
