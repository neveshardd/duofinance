'use server'

import db from "@/lib/db"
import { hashSync } from "bcrypt-ts"
import { redirect } from "next/navigation"

export default async function register(_prevState: any, formData: FormData) {
    const entries = Array.from(formData.entries())
    const data = Object.fromEntries(entries) as { email: string, password: string, name: string }

    if (!data.email || !data.password || !data.name) {
        return {
            message: 'Preencha todos os campos para completar o cadastro!',
            success: false
        }
    }

    const user = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (user) {
        return {
            message: 'Email já cadastrado, tente outro',
            success: false
        }
    }

    await db.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashSync(data.password),
        }
    })

    return redirect('/')
}

