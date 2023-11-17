"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const MobileNavbar = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  //   useEffect(() => {
  //     if (isOpen) toggleOpen();
  //   }, [pathname, isOpen]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <Menu onClick={toggleOpen} className="relative z-50 h-5 w-5 text-zinc-700" />
      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            {isAuth ? (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/sign-up")}
                    className="flex items-center w-full font-semibold"
                    href="/sign-up">
                    Get started
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
