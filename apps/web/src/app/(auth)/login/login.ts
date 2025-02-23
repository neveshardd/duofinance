'use server'

import { signIn } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect-error"

export default async function login(_prevState: any, formData: FormData) {
    try {
        await signIn('credentials', {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            redirect: true,
            redirectTo: '/learn'
        })
    } catch (e: any) {
        if (isRedirectError(e)){
            throw e
        }

        if (e.type === 'CredentialsSignin') {
            return {
                success: false,
                message: "Email ou senha inválidos"
            }
        }

        return {
            success: false,
            message: "Ocorreu um erro ao fazer login",
        }
    }
}