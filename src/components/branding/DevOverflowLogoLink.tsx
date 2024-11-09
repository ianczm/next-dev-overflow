import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface DevOverflowLogoLinkProps {
  hideTextOnMobile?: boolean;
}

const DevOverflowLogoLink = ({
  hideTextOnMobile = false,
}: DevOverflowLogoLinkProps) => {
  return (
    <Link href="/" className="flex items-center gap-1">
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
