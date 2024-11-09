import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface DevOverflowLogoLinkProps extends ComponentProps<"a"> {
  hideTextOnMobile?: boolean;
}

const DevOverflowLogoLink = ({
  className,
  hideTextOnMobile = false,
  ...props
}: DevOverflowLogoLinkProps) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      <Image
        src="/images/site-logo.svg"
        alt="DevOverflow Logo"
        width={24}
        height={24}
      />
      <span
        className={cn(
          "h2-bold font-space-grotesk text-dark-100 dark:text-light-900",
          { "max-sm:hidden": hideTextOnMobile }
        )}
      >
        Dev<span className="text-primary-500">Overflow</span>
      </span>
    </Link>
  );
};

export default DevOverflowLogoLink;
