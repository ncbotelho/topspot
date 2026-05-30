import Link from "next/link";
import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex w-full sticky top-0 z-10 items-center justify-between py-4 px-8 bg-background/80 backdrop-blur-xs">
        <Link href="/" className="select-none">
          <h1>
            TOPSPOT<span className="text-base text-primary tracking-tight">HCM</span>
          </h1>
        </Link>

        <div className="flex-1 font-heading hidden lg:flex w-full max-w-lg focus-within:max-w-xl transition-[max-width] duration-300 ease-out">
          <InputGroup className="py-5 gap-2 border-ring/25">
            <InputGroupInput placeholder="Search jobs and companies" className="text-base!" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary">Login</Button>
          <Button>Post a job</Button>
        </div>
      </header>
      {children}
    </>
  );
}
