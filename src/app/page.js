import { redirect } from "next/navigation";

// Until real authentication exists, the home page sends people to the login screen.
export default function Home() {
  redirect("/login");
}
