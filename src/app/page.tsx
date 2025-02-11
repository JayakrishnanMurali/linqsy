import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Link as LinkIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-6 w-6" />
            <span className="text-xl font-bold">linqsy</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/dashboard">
              {/* TODO: CHANGE REDIRECTION AFTER AUTH IS IMPLEMENTED */}
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight">
            One Link to Share Everything
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Create a beautiful bio link page to showcase all your important
            links, social profiles, and content in one place.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="gap-2">
              Create Your Link <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} linqsy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
