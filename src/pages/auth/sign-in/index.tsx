import { createFileRoute } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInWithCredentialsSchema,
  type SignInWithCredentialsFormType,
} from "@/schemas/auth/sign-in-with-credentials.schema";

export const Route = createFileRoute("/auth/sign-in/")({
  component: SignInPage,
});

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInWithCredentialsFormType>({
    resolver: zodResolver(signInWithCredentialsSchema),
  });

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-lime-400 relative hidden lg:block">
        <img
          width={1600}
          height={1600}
          src="/preview-dashboard.webp"
          alt="Image"
          className="z-0 rounded-md absolute top-[28%] right-[-40%] scale-125"
        />
      </div>
      <div className="z-10 flex flex-col gap-4 p-6 md:p-10 bg-white dark:bg-zinc-950">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Posthub Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form className={"flex flex-col gap-6"}>
              <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                  <h1 className="text-2xl font-bold">Login to your account</h1>
                  <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                  </p>
                </div>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="/"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    {...register("password")}
                    type="password"
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit" disabled={isSubmitting}>
                    Login
                  </Button>
                </Field>
                <FieldSeparator>Or continue with</FieldSeparator>
                <Field>
                  <AuthenticateWithGoogleButton />
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <a
                      href="/auth/sign-up"
                      className="underline underline-offset-4"
                    >
                      Sign up
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
