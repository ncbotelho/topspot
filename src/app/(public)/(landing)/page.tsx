import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-y-auto hidescroll">
      <div className="flex flex-col w-full md:w-xs md:sticky md:top-0 md:h-screen md:shrink-0 p-4 justify-between md:overflow-y-auto hidescroll">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="select-none">
              welove<span className="text-red-700">it</span>.
            </h1>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">A curated list of the best IT jobs</p>
          </div>
          <div className="flex gap-2">
            <Button>SAP</Button>
            <Button>Oracle</Button>
            <Button>Workday</Button>
          </div>
        </div>
        <div>
          <p>We love IT jobs. We love IT people. We love IT companies.</p>
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
