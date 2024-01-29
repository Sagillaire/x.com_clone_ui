import { FC, ReactNode } from "react"
import { AsideNav } from "./AsideNav";

export const LayoutMain: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex justify-center relative">
      <AsideNav />
      <div className="w-[598px] border-x-[1px] border-[#1C1C1C]">
        {children}
      </div>
    </main>
  );
};
