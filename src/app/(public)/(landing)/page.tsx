import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function JobCard({ jobId, title, tags, salaryRange, company, location, url }: { jobId: string; title: string; tags: string[]; salaryRange?: string; company: string; location: string; url: string }) {
  return (
    <article id={jobId} className="flex w-full h-fit p-4 gap-8 justify-between items-end border-b last:border-b-0">
      <div className="flex flex-col w-full gap-0.5">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="line-clamp-1">{title}</h3>
          <div className="flex flex-wrap items-center gap-1">
            {tags.map((tag) => (
              <Badge key={`${jobId}-${tag}`} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        {salaryRange && <p className="text-sm text-muted-foreground">{salaryRange}</p>}
        <a href={`/companies/${company}`} className="w-fit">
          <p className="text-sm text-muted-foreground hover:text-foreground line-clamp-2">{company}</p>
        </a>
        <a href={`/locations/${location}`} className="w-fit">
          <p className="text-sm text-muted-foreground hover:text-foreground line-clamp-2">{location}</p>
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Button
          nativeButton={false}
          variant="outline"
          className="grow border-foreground"
          render={
            <a href={url}>
              More <Plus />
            </a>
          }
        />
        <Button nativeButton={false} render={<a href={url}>Apply</a>} />
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full h-screen overflow-y-auto hidescroll">
      <div className="flex flex-col w-full md:w-xs md:sticky md:top-0 md:h-screen md:shrink-0 p-4 justify-between md:overflow-y-auto hidescroll border-r border-foreground">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-end h-12">
              <h1 className="select-none">
                TOPSPOT<span className="text-base text-primary tracking-tight">HCM</span>
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">A curated list of HCM jobs.</p>
          </div>
          <div className="flex flex-col gap-1">
            <Button variant="outline" className="grow border-foreground">
              Home
            </Button>
            <Button variant="outline" className="grow border-foreground">
              Jobs
            </Button>
            <Button variant="outline" className="grow border-foreground">
              Companies
            </Button>
            <Button variant="outline" className="grow border-foreground">
              Locations
            </Button>
            <Button variant="outline" className="grow border-foreground">
              Skills
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="grow">Post a job</Button>
          <form action="/login" method="GET">
            <Button type="submit" variant="outline" className="grow border-foreground">
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col flex-1 py-4">
        <section className="flex flex-col h-full gap-4">
          <div className="flex items-end h-12 gap-2 text-ring px-4">
            <h2>All</h2>
            <h2 className="text-foreground">Featured</h2>
            <h2>Latest</h2>
          </div>
          <div>
            <JobCard jobId="1" title="SuccessFactors Consultant" company="ComTec Information Systems (IT)" location="Newark, NJ" tags={["Employee Central", "10+ years of experience", "Full-time", "Remote"]} url="#" />
            <JobCard jobId="2" title="SuccessFactors Consultant" company="MARVEL Infotech Inc." location="Newark, NJ" tags={["Employee Central, CPI", "5+ years of experience", "Full-time", "Hybrid"]} url="#" />
            <JobCard jobId="3" title="SuccessFactors Specialist" company="Clevanoo LLC" location="Somerset County, NJ" tags={["Employee Central, Compensation", "5+ years of experience", "Full-time", "On-site"]} url="#" salaryRange="$150,000/yr" />
            <JobCard jobId="4" title="Senior IT SuccessFactors Specialist" company="Clevanoo LLC" location="Piscataway, NJ" tags={["Employee Central", "5+ years of experience", "Full-time", "Hybrid"]} url="#" />
            <JobCard jobId="5" title="SuccessFactors Senior/Lead Consultant" company="AspireHR" location="Dallas, TX" tags={["Onboarding", "3+ years of experience", "Full-time", "Remote"]} url="#" />
          </div>
        </section>
      </div>
    </main>
  );
}
