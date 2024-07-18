// IMPORTS -
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// PARTIALS -
const fontPoppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Patient Sync",
  description: "A patient management web application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "size-full antialiased bg-dark-300",
          fontPoppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
