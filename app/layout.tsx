import type { Metadata } from "next";
import { Montserrat, Poppins, Inter } from "next/font/google";
import localFonts from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-monserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const tristan = localFonts({
  src: "./fonts/tristandemoregular-pkbwx.ttf",
  variable: "--font-tristan",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Navbar />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
