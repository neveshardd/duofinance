'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Form from "next/form";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import login from "./login";
import { useActionState, useState } from "react";
import { Eye, EyeOff, Loader, ShieldAlert } from "lucide-react";

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(login, null);
    const [showPassword, setShowPassword] = useState(false);
    const [autoComplete, setAutoComplete] = useState('new-password');
    const [password, setPassword] = useState('');

    return (
        <>
            {state?.success === false && <div
                className="flex gap-2 items-center alert alert-error text-xs bg-red-500/20 border border-red-500/50 font-semibold p-4 rounded-sm transition-all duration-500 text-red-500 mb-4">
                <ShieldAlert />
                {state.message}
            </div>
            }
            <Form action={formAction}>
                <div>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Insira seu email" />
                </div>
                <div className="relative">
                    <Label>Senha</Label>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="********"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete={autoComplete}
                    />
                    <button
                        className="absolute inset-y-0 right-0 top-6 px-4 text-gray-500 hover:text-gray-700"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                </div>
                <div className="flex flex-col justify-between mt-2 md:flex-row">
                    <Link href="/" className="text-xs hover:underline">
                        Esqueceu sua senha?
                    </Link>
                    <Link href="/register" className="text-xs hover:underline">
                        Não possui uma conta?
                    </Link>
                </div>
                <div>
                <Button className="w-full mt-6 flex gap-2" type="submit" disabled={isPending}>
                        {isPending && <span className="animate-spin"><Loader /></span>}
                        Entrar
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-4 my-4">
                    <Separator className="flex w-36" /> ou <Separator className=" flex w-36" />
                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <Button className="w-full" type="submit" variant="outline">
                        <FaFacebook /> Facebook
                    </Button>
                    <Button className="w-full" type="submit" variant="outline">
                        <FcGoogle /> Google
                    </Button>
                </div>
            </Form>
        </>
    )
}