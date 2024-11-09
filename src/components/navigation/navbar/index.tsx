import DevOverflowLogoLink from "@/components/branding/DevOverflowLogoLink";

import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-10 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <DevOverflowLogoLink hideTextOnMobile />
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <ThemeToggle />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
