import type { Metadata } from "next";
import { Montserrat, Poppins, Inter } from "next/font/google";
import localFonts from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: {
    template: "%s | Kequel",
    default: "Kequel",
    absolute: "Kequel",
  },
  description:
    "Kequel furniture combines cutting-edge design with timeless elegance, offering smart features that enhance comfort and functionality.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
