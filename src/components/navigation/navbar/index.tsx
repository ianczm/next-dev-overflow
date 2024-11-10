import { ComponentProps } from "react";

import DevOverflowLogoLink from "@/components/branding/DevOverflowLogoLink";
import { cn } from "@/lib/utils";

import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ className, ...props }: ComponentProps<"nav">) => {
  return (
    <nav
      className={cn(
        "lg:grid lg:grid-cols-subgrid flex justify-between items-center background-light900_dark200 gap-5 p-6 shadow-light100_dark100 sm:px-12 border-b light-border",
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
