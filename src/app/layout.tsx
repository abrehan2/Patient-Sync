// IMPORTS -
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// PARTIALS -
const fontPoppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
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
      <body className={fontPoppins.className}>{children}</body>
    </html>
  );
}
