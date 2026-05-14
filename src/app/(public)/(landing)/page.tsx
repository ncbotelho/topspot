import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-y-auto hidescroll">
      <div className="flex flex-col w-full md:w-xs md:sticky md:top-0 md:h-screen md:shrink-0 p-4 justify-between md:overflow-y-auto hidescroll">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="select-none">
              welove<span className="text-red-700">it</span>.
            </h1>
            <p className="text-sm text-muted-foreground">A curated list of ERP & HRIS jobs</p>
          </div>
          <Separator />
          <div className="flex flex-col">
            <Button variant="outline" className="rounded-none grow border-b-0">
              All Jobs
            </Button>
            <div className="flex flex-wrap">
              <Button variant="outline" className="rounded-none grow">
                SAP
              </Button>
              <Button variant="outline" className="rounded-none grow border-l-0">
                Oracle
              </Button>
              <Button variant="outline" className="rounded-none grow border-l-0">
                Workday
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <Button variant="outline" className="rounded-none grow">
              Companies
            </Button>
          </div>
        </div>
        <div>
          <Button>Post a job</Button>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div className="w-full h-full">
          <div className="h-full">
            <p>Hello World - Fix dev deployment</p>
            <form action="/login" method="GET">
              <Button type="submit">Login</Button>
            </form>
          </div>
          <div className="h-full">
            <p>Hello World - Fix dev deployment</p>
            <form action="/login" method="GET">
              <Button type="submit">Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
