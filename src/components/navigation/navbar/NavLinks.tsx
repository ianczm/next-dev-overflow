"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import SIDEBAR_LINKS, { SidebarLink } from "@/constants/sidebar-links";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  isMobileNav?: boolean;
}

const isSidebarLinkActive = (sidebarLink: SidebarLink, pathname: string) => {
  return (
    (sidebarLink.route.length > 1 && pathname.includes(sidebarLink.route)) ||
    pathname === sidebarLink.route
  );
};

const NavLinks = ({ isMobileNav = false }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <>
      {SIDEBAR_LINKS.map((sidebarLink) => {
        const isActive = isSidebarLinkActive(sidebarLink, pathname);

        const LinkComponent = (
          <Link
            href={sidebarLink.route}
            key={sidebarLink.label}
            className={cn(
              "text-dark300_light900 flex items-center justify-start gap-4 rounded-lg bg-transparent p-4",
              {
                "primary-gradient text-light-900": isActive,
              }
            )}
          >
            <Image
              src={sidebarLink.imageSrc}
              alt={sidebarLink.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(isActive ? "base-bold" : "base-medium", {
                "max-lg:hidden": !isMobileNav,
              })}
            >
              {sidebarLink.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose key={sidebarLink.label} asChild>
            {LinkComponent}
          </SheetClose>
        ) : (
          LinkComponent
        );
      })}
    </>
  );
};

export default NavLinks;
