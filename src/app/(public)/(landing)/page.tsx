import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import { SearchIcon } from "lucide-react";

export default function Home2() {
  return (
    <>
      <header className="grid w-full grid-cols-3 sticky top-0 z-10 items-center py-1 px-4">
        <div className="flex justify-start">
          <h1 className="select-none">
            TOPSPOT<span className="text-base text-primary tracking-tight">HCM</span>
          </h1>
        </div>
        <div className="font-heading">
          <InputGroup className="py-5 gap-2">
            <InputGroupInput placeholder="Search jobs and companies" className="text-base!" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="secondary">Login</Button>
          <Button>Post a job</Button>
        </div>
      </header>
      <main className="">
        <section className=""></section>
        <section className=""></section>
      </main>
    </>
  );
}
