import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import { ExternalLink, SearchIcon, Share, SlidersHorizontal } from "lucide-react";

export default function Home2() {
  return (
    <>
      <header className="flex w-full sticky top-0 z-10 items-center justify-between py-4 px-8 bg-background/80 backdrop-blur-xs">
        <h1 className="select-none">
          TOPSPOT<span className="text-base text-primary tracking-tight">HCM</span>
        </h1>

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
            <Accordion className="rounded-none px-2">
              {[
                {
                  title: "Senior SuccessFactors Consultant",
                  company: "Deloitte",
                  location: "Austin, TX",
                  type: "Remote",
                  salary: "$140k–$170k",
                  description: "Lead end-to-end SuccessFactors Employee Central implementations for enterprise clients. Own configuration, data migration, and stakeholder workshops while mentoring junior consultants.",
                  requirements: ["5+ years SuccessFactors EC", "Strong client-facing skills", "SAP certification preferred"],
                },
                {
                  title: "Workday Integration Lead",
                  company: "Accenture",
                  location: "New York, NY",
                  type: "Hybrid",
                  salary: "$155k–$185k",
                  description: "Design and build Workday integrations using Studio, EIB, and Core Connectors. Partner with HRIS and IT teams to deliver secure, scalable data flows across the people stack.",
                  requirements: ["Workday Studio expertise", "10+ years integration work", "Experience with PECI/PICOF"],
                },
                {
                  title: "Dayforce Implementation Specialist",
                  company: "Ceridian",
                  location: "Minneapolis, MN",
                  type: "On-site",
                  salary: "$120k–$150k",
                  description: "Configure Dayforce payroll and time modules for mid-market customers. Drive testing, parallel runs, and go-live support to ensure smooth transitions.",
                  requirements: ["3+ years Dayforce config", "Payroll domain knowledge", "Excellent troubleshooting"],
                },
                {
                  title: "UKG Pro Analyst",
                  company: "Kronos",
                  location: "Remote (US)",
                  type: "Remote",
                  salary: "$110k–$135k",
                  description: "Support and enhance UKG Pro for a growing HR team. Manage configuration, reporting, and BI dashboards while serving as the internal product expert.",
                  requirements: ["3+ years UKG Pro", "BI Reporting skills", "Self-directed remote worker"],
                },
                {
                  title: "Cornerstone LMS Administrator",
                  company: "Cornerstone",
                  location: "Santa Monica, CA",
                  type: "Hybrid",
                  salary: "$95k–$120k",
                  description: "Administer the Cornerstone LMS for a global workforce. Build learning paths, manage content, and report on training compliance and engagement.",
                  requirements: ["Cornerstone admin experience", "Learning content management", "Reporting and analytics"],
                },
              ].map((job) => (
                <AccordionItem key={job.title} value={job.title} className="data-open:bg-transparent">
                  <AccordionTrigger className="group items-center gap-6 px-0 py-3 text-base font-normal hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                    <div className="flex min-w-0 items-baseline gap-3">
                      <span className="truncate font-medium group-hover:underline">{job.title}</span>
                      <span className="truncate text-sm text-muted-foreground">{job.company}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-6 text-sm text-muted-foreground">
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                      <span className="tabular-nums text-foreground">{job.salary}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="-mx-4 pl-4 pt-1 pb-6">
                    <div className="flex items-start justify-between gap-8">
                      <div className="max-w-2xl">
                        <p className="text-sm leading-relaxed text-foreground/80">{job.description}</p>
                        <ul className="space-y-1">
                          {job.requirements.map((req) => (
                            <li key={req} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="size-1 rounded-full bg-muted-foreground" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <Button>
                          Apply
                          <ExternalLink />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
}
