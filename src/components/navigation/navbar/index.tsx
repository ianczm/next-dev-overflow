import { ComponentProps } from "react";

import DevOverflowLogoLink from "@/components/branding/DevOverflowLogoLink";
import { cn } from "@/lib/utils";

import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ className, ...props }: ComponentProps<"nav">) => {
  return (
    <nav
      className={cn(
        "sm:grid sm:grid-cols-subgrid flex justify-between items-center background-light900_dark200 gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12",
        className
      )}
      {...props}
    >
      <DevOverflowLogoLink hideTextOnMobile />

      <div className="justify-self-center">
        <p>Global Search</p>
      </div>

      <div className="flex-between gap-5 justify-self-end">
        <ThemeToggle />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
