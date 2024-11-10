import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";
import DesktopNavigation from "@/components/navigation/navbar/DesktopNavigation";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    /* sm:grid-cols-[270px_auto_270px] */
    <main className="relative grid h-screen max-h-screen grid-cols-1 grid-rows-[auto_1fr] sm:grid-cols-[auto_1fr_min-content] xl:grid-cols-[auto_1fr_auto]">
      <Navbar className="z-20 col-span-full row-start-1" />
      <div className="relative col-span-full flex overflow-y-scroll lg:grid lg:grid-cols-subgrid">
        {/* leftbar */}
        <div className="hidden w-[54px] sm:block sm:w-[103px] lg:w-[270px]">
          <div className="fixed top-0 z-10 h-screen lg:w-[270px]">
            <DesktopNavigation />
          </div>
        </div>

        {/* content */}
        <div className="grow sm:col-span-2 xl:col-span-1">
          <div className=" px-10 pt-16">
            <div className="mx-auto h-[1000px] w-full max-w-5xl">
              {children}
            </div>
          </div>
        </div>

        {/* rightbar */}
        <div className="hidden w-[270px] xl:block">
          <div className="fixed top-0 z-10 h-screen w-[270px]">
            <div className="background-light900_dark200 no-scrollbar background-light900_dark200 shadow-light100_dark100 light-border h-full p-6 pt-[calc(24px+85px)]">
              Rightbar
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BaseLayout;
