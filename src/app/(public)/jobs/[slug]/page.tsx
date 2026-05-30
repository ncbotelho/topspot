import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Share } from "lucide-react";

import { Button } from "@/components/ui/button";
import { JobList } from "@/components/job-list";
import { getJobBySlug, getRelatedJobs, jobs } from "@/lib/mock-jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Job not found" };
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description,
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const relatedJobs = getRelatedJobs(slug);

  return (
    <main>
      <article className="px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" />
          Back to jobs
        </Link>

        <div className="mt-8 flex items-start justify-between gap-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tighter">{job.title}</h2>
            <p className="mt-1 text-lg text-muted-foreground">{job.company}</p>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>{job.location}</span>
              <span>{job.type}</span>
              <span className="tabular-nums text-foreground">{job.salary}</span>
            </div>
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

        <div className="mt-10 max-w-2xl space-y-8">
          <section>
            <h3 className="text-sm font-medium text-muted-foreground">About the role</h3>
            <p className="mt-2 leading-relaxed text-foreground/80">{job.description}</p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-muted-foreground">Requirements</h3>
            <ul className="mt-2 space-y-1">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-center gap-2 text-foreground/80">
                  <span className="size-1 rounded-full bg-muted-foreground" />
                  {req}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <section className="border-t py-12">
        <p className="px-8 pb-4 text-sm text-muted-foreground">Related jobs</p>
        <div className="px-8">
          <JobList jobs={relatedJobs} />
        </div>
      </section>
    </main>
  );
}
