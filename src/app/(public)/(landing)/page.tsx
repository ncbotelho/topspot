import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import { SearchIcon } from "lucide-react";

export default function Home2() {
  return (
    <>
      <header className="grid w-full lg:grid-cols-3 grid-cols-2 sticky top-0 z-10 items-center py-4 px-8">
        <div className="flex w-fit justify-start">
          <h1 className="select-none">
            TOPSPOT<span className="text-base text-primary tracking-tight">HCM</span>
          </h1>
        </div>
        <div className="flex-1 font-heading hidden lg:flex">
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
      <main>
        <section className="flex w-full py-12">
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">ecosystem</p>
            <ul>
              <li>SAP</li>
              <li>Workday</li>
              <li>Dayforce</li>
              <li>UKG</li>
              <li>Cornerstone</li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">experience level</p>
            <ul>
              <li>3 years</li>
              <li>5 years</li>
              <li>10 years</li>
              <li>15 years</li>
              <li>20 years</li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">location</p>
            <ul>
              <li>Texas</li>
              <li>New York</li>
              <li>California</li>
              <li>Washington</li>
              <li>Illinois</li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">contract type</p>
            <ul>
              <li>Full-time</li>
              <li>Part-time</li>
              <li>Temporary</li>
              <li>Employee</li>
              <li>Contract</li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">contract type</p>
            <ul>
              <li>Full-time</li>
              <li>Part-time</li>
              <li>Temporary</li>
              <li>Employee</li>
              <li>Contract</li>
            </ul>
          </div>
        </section>
        <section className="px-8">
          <div className="flex w-full justify-between items-center bg-muted rounded-md p-2">
            <p>123</p>
            <p>123</p>
          </div>
        </section>
        <section className="py-12">
          <div className="px-8">123</div>
        </section>
      </main>
    </>
  );
}
