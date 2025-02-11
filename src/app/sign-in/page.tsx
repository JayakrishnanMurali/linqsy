import { AuthForm } from "@/components/auth/auth-form";

export default function SignInPage() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto w-full max-w-sm">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to manage your links
          </p>
        </div>
        <AuthForm mode="sign-in" className="mt-8" />
      </div>
    </div>
  );
}
