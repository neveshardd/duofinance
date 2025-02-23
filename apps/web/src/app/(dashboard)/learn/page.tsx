import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import logout from "@/lib/logout";
import { redirect } from "next/navigation";

export default async function Learn(){
  const session = await auth();

  if(!session) {
    redirect('/login')
  }

  return (
    <nav className="flex justify-center items-center h-screen mx-auto">
      <Button onClick={logout}>Logout</Button>
    </nav>
  )
}