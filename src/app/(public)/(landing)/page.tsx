import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex w-full p-4 items-center justify-center gap-4">
      <p>Hello World</p>
      <form action="/login" method="GET">
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
