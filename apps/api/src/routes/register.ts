import z from "zod";
import { FastifyTypedInstance } from "../types";
import { prisma } from "../../lib/prisma";
import { hashPassword } from "../../utils/hash";

export default function register(app: FastifyTypedInstance) {
    const registerSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8, "Senha muito curta"),
    })

    app.post('/register', {
        schema: {
            description: 'Cadastrar um novo usuário',
            tags: ['auth'],
            body: registerSchema,
            response: {
                201: z.object({
                    name: z.string(),
                    email: z.string(),
                    message: z.string(),
                    statusCode: z.number(),
                }),
                400: z.object({
                    message: z.string(),
                    statusCode: z.number(),
                }),
            }
        }
    }, async (request, reply) => {
        const { name, email, password } = registerSchema.parse(request.body)

        const existingUser = await prisma.users.findUnique({ where: { email } })
        if (existingUser) {
            return reply.status(400).send({
                message: 'Usuário ja cadastrado',
                statusCode: 400
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await prisma.users.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        return reply.status(201).send({
            name: user.name,
            email: user.email,
            message: 'Usuário cadastrado com sucesso',
            statusCode: 201
        })
    })
}
