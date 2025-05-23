import type { Metadata } from "next";
import { Inter_Tight} from "next/font/google";
import "./globals.css";



const geistMono = Inter_Tight({

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebula UI",
  description: "Generated by create next app",
  icons: "./logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
