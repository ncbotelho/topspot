export type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-successfactors-consultant",
    title: "Senior SuccessFactors Consultant",
    company: "Deloitte",
    location: "Austin, TX",
    type: "Remote",
    salary: "$140k–$170k",
    description: "Lead end-to-end SuccessFactors Employee Central implementations for enterprise clients. Own configuration, data migration, and stakeholder workshops while mentoring junior consultants.",
    requirements: ["5+ years SuccessFactors EC", "Strong client-facing skills", "SAP certification preferred"],
  },
  {
    slug: "workday-integration-lead",
    title: "Workday Integration Lead",
    company: "Accenture",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$155k–$185k",
    description: "Design and build Workday integrations using Studio, EIB, and Core Connectors. Partner with HRIS and IT teams to deliver secure, scalable data flows across the people stack.",
    requirements: ["Workday Studio expertise", "10+ years integration work", "Experience with PECI/PICOF"],
  },
  {
    slug: "dayforce-implementation-specialist",
    title: "Dayforce Implementation Specialist",
    company: "Ceridian",
    location: "Minneapolis, MN",
    type: "On-site",
    salary: "$120k–$150k",
    description: "Configure Dayforce payroll and time modules for mid-market customers. Drive testing, parallel runs, and go-live support to ensure smooth transitions.",
    requirements: ["3+ years Dayforce config", "Payroll domain knowledge", "Excellent troubleshooting"],
  },
  {
    slug: "ukg-pro-analyst",
    title: "UKG Pro Analyst",
    company: "Kronos",
    location: "Remote (US)",
    type: "Remote",
    salary: "$110k–$135k",
    description: "Support and enhance UKG Pro for a growing HR team. Manage configuration, reporting, and BI dashboards while serving as the internal product expert.",
    requirements: ["3+ years UKG Pro", "BI Reporting skills", "Self-directed remote worker"],
  },
  {
    slug: "cornerstone-lms-administrator",
    title: "Cornerstone LMS Administrator",
    company: "Cornerstone",
    location: "Santa Monica, CA",
    type: "Hybrid",
    salary: "$95k–$120k",
    description: "Administer the Cornerstone LMS for a global workforce. Build learning paths, manage content, and report on training compliance and engagement.",
    requirements: ["Cornerstone admin experience", "Learning content management", "Reporting and analytics"],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getRelatedJobs(slug: string, limit = 4): Job[] {
  return jobs.filter((job) => job.slug !== slug).slice(0, limit);
}
