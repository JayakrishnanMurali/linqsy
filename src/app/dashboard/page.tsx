import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function WebsitesPage() {
  // TODO: Replace with actual data fetching
  const websites: unknown[] = [];
  const hasWebsites = websites.length > 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Websites</h1>
        <p className="text-muted-foreground">
          Create and manage your bio link pages
        </p>
      </div>

      {!hasWebsites && (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed">
          <div className="mx-auto flex max-w-[440px] flex-col items-center justify-center text-center">
            <PlusCircle className="h-10 w-10 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">Get started</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              Create your first bio link page to share all your important links
              in one place
            </p>
            <Button asChild>
              <Link href="/dashboard/websites/create">Create Website</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
