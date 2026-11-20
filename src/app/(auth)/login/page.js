import Image from "next/image";
import Card from "@/components/ui/Card";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = { title: "Sign in | AHB Weekly Planner" };

export default function LoginPage() {
  return (
    <main className="login-wrap">
      <Card className="login-card">
        <Image src="/logo.png" alt="Autism Home Base" width={200} height={108} priority />
        <h1>Sign in</h1>
        <LoginForm />
      </Card>
    </main>
  );
}
