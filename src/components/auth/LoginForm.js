"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

// UI only. Real sign-in is added when Supabase auth is connected.
export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    if (!email) {
      setError("Enter your email address");
      return;
    }
    setError("");
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input id="email" name="email" label="Email" type="email" autoComplete="email" error={error} />
      <Input id="password" name="password" label="Password" type="password" autoComplete="current-password" />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
