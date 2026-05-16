import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full h-screen overflow-y-auto hidescroll">
      <div className="flex flex-col w-full md:w-xs md:sticky md:top-0 md:h-screen md:shrink-0 p-4 justify-between md:overflow-y-auto hidescroll">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="select-none">
              TOPSPOT<span className="text-base text-primary tracking-tight">HCM</span>
            </h1>
            <p className="text-sm text-muted-foreground">A curated list of HCM jobs.</p>
          </div>
          <div className="flex flex-col gap-1">
            <Button variant="secondary" className="grow">
              Home
            </Button>
            <Button variant="secondary" className="grow">
              Jobs
            </Button>
            <Button variant="secondary" className="grow">
              Companies
            </Button>
            <Button variant="secondary" className="grow">
              Locations
            </Button>
            <Button variant="secondary" className="grow">
              Skills
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="grow">Post a job</Button>
          <form action="/login" method="GET">
            <Button type="submit" variant="secondary" className="grow">
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div className="w-full h-full">
          <section className="h-full">
            <h2>Hello World - Fix dev deployment</h2>
          </section>
          <section className="h-full">
            <p>Hello World - Fix dev deployment</p>
          </section>
        </div>
      </div>
    </main>
  );
}
