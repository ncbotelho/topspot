import { Button } from "@/components/ui/button";
import { signOut } from "@workos-inc/authkit-nextjs";

export default function AdminDashboardPage() {
  return (
    <div className="flex w-full p-4 items-center justify-center gap-4">
      <p>Admin Dashboard</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
