import Link from "next/link";
import { ExternalLink, Share } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Job } from "@/lib/mock-jobs";

export function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <Accordion className="rounded-none px-2">
      {jobs.map((job) => (
        <AccordionItem key={job.slug} value={job.slug} className="data-open:bg-transparent">
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
                <Link href={`/jobs/${job.slug}`} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                  View full posting →
                </Link>
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
  );
}
