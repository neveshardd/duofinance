'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import register from "./register";
import { useActionState } from "react";
import { Loader, ShieldAlert, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function RegisterForm() {
    const [state, formAction, isPending] = useActionState(register, null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [autoComplete, setAutoComplete] = useState('new-password');

    const validatePasswords = () => {
        if (!password && confirmPassword) {
            return "Por favor, preencha a senha.";
        }
        if (!confirmPassword) {
            return "Por favor, confirme sua senha.";
        }
        if (password && confirmPassword && password !== confirmPassword) {
            return "As senhas não conferem, por favor verifique novamente.";
        }
        return null;
    };

    const errorMessage = validatePasswords();

    return (
        <>
            {state?.success === false && <div
                className="flex gap-2 items-center alert alert-error text-xs bg-red-500/20 border border-red-500/50 font-semibold p-4 rounded-sm transition-all duration-500 text-red-500 mb-4">
                <ShieldAlert />
                {state.message}
            </div>}
            <Form action={formAction}>
                <div>
                    <Label>Nome</Label>
                    <Input type="text" name="name" placeholder="Insira seu nome" autoComplete="name" />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Insira seu email" autoComplete="email" />
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
                <div className="relative">
                    <Label>Confirmar senha</Label>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        name="confirm-password"
                        placeholder="********"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        autoComplete={autoComplete}
                    />
                    <button
                        className="absolute inset-y-0 top-6 right-0 px-4 text-gray-500 hover:text-gray-700"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                </div>
                {showErrorMessage && errorMessage && <div className="text-red-500 text-xs mt-2">{errorMessage}</div>}
                <div className="mt-2">
                    <Link href="/login" className="text-xs hover:underline">
                        Já possui uma conta?
                    </Link>
                </div>
                <div>
                    <Button className="w-full mt-6 flex gap-2" type="submit" disabled={isPending || !!errorMessage}>
                        {isPending && <span className="animate-spin"><Loader /></span>}
                        Criar conta
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-4 my-4">
                    <Separator className="flex w-36" /> ou <Separator className="flex w-36" />
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
    );
}

