"use client";

import { cn } from "@/lib/utils";
import { Link, LinkProps } from "react-scroll";

interface NavbarLinkProps extends LinkProps {
  title: string;
}

export const NavbarLink = ({ title, className, ...props }: NavbarLinkProps) => {
  return (
    <li className={cn("h-20 lg:h-full w-full", className)}>
      {/* @ts-ignore */}
      <Link
        className="flex items-center px-3 lg:px-6 h-full hover:opacity-70 cursor-pointer justify-center font-semibold"
        {...props}
      >
        {title}
      </Link>
    </li>
  );
};
