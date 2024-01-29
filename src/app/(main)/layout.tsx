import { ReactNode } from "react";
import { LayoutMain } from "@/core/layout";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <LayoutMain>
      {children}
    </LayoutMain>
  );
};
