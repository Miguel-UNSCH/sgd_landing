"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Info, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components//theme/mode-toogle";
import Image from "next/image";

const routes = [
  { href: "/", label: "Inicio", icon: <Home className="h-4 w-4" /> },
  {
    href: "/modulos",
    label: "Módulos",
    icon: <FileText className="h-4 w-4" />,
  },
  { href: "/info", label: "Información", icon: <Info className="h-4 w-4" /> },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container py-4 items-center">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/80">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="hidden md:flex items-center rounded-full bg-black/30 backdrop-blur-md border border-white/10 p-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  pathname === route.href
                    ? "bg-[#4CAF50] text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {route.icon}
                {route.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center ml-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild className="md:hidden ml-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/30 border-white/10 text-white"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 border-white/10"
              >
                <nav className="mt-10 flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex items-center gap-3 text-lg font-medium transition-colors p-2 rounded-md",
                        pathname === route.href
                          ? "bg-[#4CAF50]/20 text-[#4CAF50]"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {route.icon}
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
