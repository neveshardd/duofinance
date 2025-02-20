import { prisma } from "../../lib/prisma";
import { FastifyTypedInstance } from "../types";
import { verifyPassword } from "../../utils/hash";
import z from "zod";

export function login(app: FastifyTypedInstance) {
    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8, "Senha muito curta"),
    })

    app.post('/login', {
        schema: {
            description: 'Logar no sistema',
            tags: ['auth'],
            body: loginSchema,
            response: {
                200: z.object({
                    token: z.string(),
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
        const { email, password } = loginSchema.parse(request.body)

        const user = await prisma.users.findUnique({
            where: { email }
        })

        if (!user) {
            return reply.status(400).send({
                message: 'Usuário ou senha incorretos',
                statusCode: 400
            })
        }

        const isPasswordValid = await verifyPassword(password, user.password)
        if (!isPasswordValid) {
            return reply.status(400).send({
                message: 'Usuário ou senha incorretos',
                statusCode: 400
            })
        }

        const token = app.jwt.sign({ id: user.id, email: user.email }, { expiresIn: '1d' }) 

        return reply.status(200).send({
            token,
            message: "Login efetuado com sucesso",
            statusCode: 0
        })
    })
}