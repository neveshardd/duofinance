import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import RegisterForm from "./form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Register() {
    const session = await auth();

    if(session) {
        redirect('learn')
    }

    return (
        <div className="flex justify-center items-center h-screen flex-col bg-[url('/bg-mobile.png')] md:bg-[url('/bg-desk.png')] bg-cover bg-center">
            <Card className="max-w-xs md:max-w-sm w-full rounded-2xl p-2">
            <Card className="p-2">
                <CardHeader>
                    <h2 className="text-xl font-bold">Criar conta</h2>
                    <CardDescription>Faça seu cadastro gratuitamente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
            </Card>
            </Card>
        </div>
    )
}