import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    /* sm:grid-cols-[270px_auto_270px] */
    <main className="grid h-screen max-h-screen grid-cols-1 grid-rows-[auto_1fr] sm:grid-cols-[270px_auto_min-content] xl:grid-cols-[270px_auto_270px]">
      <Navbar className="col-span-full row-start-1" />
      <div className="relative col-span-full grid grid-cols-subgrid overflow-y-scroll">
        {/* leftbar */}
        <div className="relative hidden sm:block">
          <div className="fixed size-full max-w-[270px]">Leftbar</div>
        </div>

        {/* content */}
        <div className="relative sm:col-span-2 xl:col-span-1">
          <div className="h-[1000px]">
            <div>Content</div>
            {children}
          </div>
        </div>

        {/* rightbar */}
        <div className="relative hidden xl:block">
          <div className="fixed size-full max-w-[270px]">Rightbar</div>
        </div>
      </div>
    </main>
  );
};

export default BaseLayout;
