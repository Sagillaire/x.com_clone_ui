import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { InterFont } from "@/core/config";

export const metadata: Metadata = {
  title: "X Clone",
  description: "This is a UI based on X",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${InterFont.className} w-full h-screen`}>
        {children}
      </body>
    </html>
  );
};
