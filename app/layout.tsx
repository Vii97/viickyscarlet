import type { Metadata } from "next";
import { Antic_Didone } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const anticDidone = Antic_Didone({
  variable: "--font-antic-didone",
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Viicky Scarlet",
  description: "Web, arte, cosplay y fotografía virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anticDidone.variable} antialiased`}
      >
        <NavBar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
