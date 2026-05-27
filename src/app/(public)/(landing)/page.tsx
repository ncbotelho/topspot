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
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  SAP
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Workday
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Dayforce
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  UKG
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Cornerstone
                </Button>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">years of experience</p>
            <ul>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  less than 3
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  more than 3
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  more than 5
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  more than 10
                </Button>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">location</p>
            <ul>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Texas
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  New York
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  California
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Washington
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Illinois
                </Button>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">contract type</p>
            <ul>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Full-time
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Part-time
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Temporary
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Salaried
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Hourly
                </Button>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <p className="text-muted-foreground">workplace</p>
            <ul>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Remote
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  On-site
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 py-0 text-2xl h-auto font-semibold tracking-tighter">
                  Hybrid
                </Button>
              </li>
            </ul>
          </div>
        </section>
        <section className="px-8">
          <div className="flex w-full justify-between items-center bg-secondary rounded-md p-2">
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
