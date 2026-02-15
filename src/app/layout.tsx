import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Siddha Scholar | Dr. Amirtha - Online Siddha Consultation",
  description:
    "Book your online Siddha consultation with Dr. Amirtha, BSMS Gold Medalist. Traditional Siddha wisdom meets modern healthcare for root-cause healing.",
  keywords:
    "siddha doctor, online consultation, siddha medicine, traditional medicine, Dr Amirtha, root cause healing, natural treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
