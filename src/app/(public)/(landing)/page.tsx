import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { JobList } from "@/components/job-list";
import { jobs } from "@/lib/mock-jobs";

export default function Home2() {
  return (
    <main>
      <section className="flex w-full py-12">
        <div className="flex-1 px-8">
          <p className="text-sm text-muted-foreground">ecosystem</p>
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
          <p className="text-sm text-muted-foreground">years of experience</p>
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
          <p className="text-sm text-muted-foreground">location</p>
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
          <p className="text-sm text-muted-foreground">contract type</p>
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
          <p className="text-sm text-muted-foreground">workplace</p>
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
      <section className="sticky top-[68px] z-10 px-8 bg-background/80 backdrop-blur-xs">
        <div className="flex w-full justify-between items-center p-2">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">sort by</p>
            <div className="flex items-center gap-0">
              <Button variant="ghost" className="text-base">
                Latest
              </Button>
              <Button variant="ghost" className="text-base">
                Most viewed
              </Button>
              <Button variant="ghost" className="text-base">
                Most applicants
              </Button>
            </div>
          </div>

          <Button variant="ghost" className="text-base">
            <SlidersHorizontal />
            More filters
          </Button>
        </div>
      </section>
      <section className="py-12">
        <div className="px-8">
          <JobList jobs={jobs} />
        </div>
      </section>
    </main>
  );
}
