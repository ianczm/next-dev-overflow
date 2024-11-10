import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import NavLinks from "./NavLinks";

const DesktopNavigation = () => {
  return (
    <div className="no-scrollbar background-light900_dark200 shadow-light100_dark100 light-border flex h-full flex-col justify-between overflow-y-auto border-r p-6 pt-[calc(24px+85px)]">
      <section className="flex h-full flex-col gap-6">
        <NavLinks />
      </section>

      <div className="flex flex-col gap-3">
        <Button
          asChild
          className="small-medium btn-secondary min-h-[40px] w-full rounded-lg px-4 py-3 shadow-none"
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="Account"
              width={20}
              height={20}
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          asChild
          className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[40px] w-full rounded-lg border px-4 py-3 shadow-none"
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              alt="Account"
              width={20}
              height={20}
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNavigation;
