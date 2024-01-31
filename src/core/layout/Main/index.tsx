import { FC, ReactNode } from "react"
import { AsideNav } from "./AsideNav";

export const LayoutMain: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex justify-center relative">
      <AsideNav />
      <div className="sm:w-full md:w-[598px]  mobileM:w-[100px] border-x-[1px] border-[#343434]">
        {children}
      </div>
    </main>
  );
};
