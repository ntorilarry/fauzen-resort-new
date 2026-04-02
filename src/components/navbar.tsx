"use client";

import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../../public";
import Image from "next/image";

const baseNavigation = [
  { name: "Home", href: "/home" },
  { name: "Gallery", href: "/gallery" },
  { name: "Floor Plans", href: "/floor-plans" },
  // { name: "Team", href: "/team" },
  { name: "Downloads", href: "/downloads" },
];

const navigation = baseNavigation.filter(
  (item, index, arr) =>
    item.name !== "Resources" &&
    arr.findIndex((candidate) => candidate.name === item.name) === index,
);

const SCROLL_THRESHOLD = 0;

const WHITE_NAV_PATHS = new Set([
  "/inquire",
  "/gallery",
  "/floor-plans",
  "/team",
  "/downloads",
]);

const Navbar = () => {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  const isActive = (href: string) => {
    const [pathOnly] = href.split("#");
    if (href === "#") return false;
    if (pathOnly === "/home") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname === pathOnly;
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const useWhiteNavBg = WHITE_NAV_PATHS.has(pathname);
  const overHero = !hasScrolled;
  const lightNavFg = overHero && !useWhiteNavBg;

  const headerBg =
    useWhiteNavBg || hasScrolled ? "bg-white shadow-sm" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        hasScrolled ? "translate-y-0" : "-translate-y-full"
      } ${headerBg}`}
    >
      <Disclosure>
        {({ open }: { open: boolean }) => (
          <>
            <nav className=" relative max-w-8xl w-full sm:mx-auto">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between py-4 lg:grid lg:grid-cols-3 lg:items-center">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src={Logo}
                      alt="FauzanResort Logo"
                      width={100}
                      height={100}
                      loading="eager"
                      className="h-auto w-24 object-contain"
                    />
                  </Link>

                  <div className="hidden lg:flex lg:justify-center lg:items-center lg:space-x-4 lg:justify-self-center">
                    {navigation.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={`${item.href}-desktop`}
                          href={item.href}
                          className={`px-2 py-2 text-sm font-medium uppercase tracking-tighter transition-colors ${
                            lightNavFg
                              ? active
                                ? "font-medium text-[#d6ac63]"
                                : "text-white/85 hover:text-white"
                              : active
                                ? "font-medium text-[#d6ac63]"
                                : "text-gray-800 hover:text-gray-700"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-2">
                    <Link href="/inquire">
                      <button
                        className={`rounded-md px-8 py-3 ms-2 text-sm uppercase font-medium transition-colors ${
                          lightNavFg
                            ? "bg-[#d6ac63] text-white  hover:bg-[#d6ac63]/25"
                            : "bg-[#d6ac63] text-white hover:bg-[#d6ac63]/50"
                        }`}
                      >
                        Contact Us
                      </button>
                    </Link>
                  </div>

                  <div className="lg:hidden">
                    <DisclosureButton
                      className={`inline-flex items-center justify-center rounded-full p-2 transition-colors ${
                        lightNavFg
                          ? "text-white hover:bg-white/15"
                          : "text-neutral-500 hover:bg-neutral-200 hover:text-[#000626]/90"
                      }`}
                    >
                      {open ? (
                        <HiX className="h-6 w-6" />
                      ) : (
                        <HiMenu className="h-6 w-6" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <DisclosurePanel className="lg:hidden">
                <div
                  className={`space-y-1 border-t px-2 pb-3 pt-2 backdrop-blur-sm ${
                    useWhiteNavBg
                      ? "border-neutral-200 bg-white/95"
                      : "border-neutral-200 bg-white/95"
                  }`}
                >
                  {navigation.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={`${item.href}-mobile`}
                        href={item.href}
                        className={`block rounded-md px-3 uppercase py-2 text-sm transition-colors ${
                          useWhiteNavBg
                            ? active
                              ? "bg-neutral-100 font-bold text-[#d6ac63]"
                              : "font-medium text-[#000626]/60 hover:text-[#000626]/90"
                            : active
                              ? "bg-neutral-100 font-bold text-[#d6ac63]"
                              : "font-medium text-[#000626]/60 hover:text-[#000626]/90"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </DisclosurePanel>
            </nav>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Navbar;
