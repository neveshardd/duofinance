import { prisma } from "../../lib/prisma"
import { z } from "zod";
import { FastifyTypedInstance } from "../types"
import { hashPassword } from "../../utils/hash";

export async function listUsers(app: FastifyTypedInstance) {
    app.get('/users', {
        schema: {
            description: 'Listar todos os usuários',
            tags: ['users'],
            response: {
                200: z.object({
                    users: z.array(z.object({
                        id: z.string(),
                        name: z.string(),
                        email: z.string(),
                        createdAt: z.date(),
                        updatedAt: z.date(),
                    })),
                    message: z.string(),
                    statusCode: z.number(),
                }),
            }
        }
    }, async (request, reply) => {
        const users = await prisma.users.findMany()

        return reply.status(200).send({
            users,
            message: 'Usuários listados com sucesso',
            statusCode: 200
        })
    })
}

export async function createUsers(app: FastifyTypedInstance) {
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8, "Senha muito curta"),
    })

    app.post('/users', {
        schema: {
            description: 'Criar um novo usuário',
            tags: ['users'],
            body: userSchema,
            response: {
                201: z.object({
                    user: userSchema,
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
        const { name, email, password } = userSchema.parse(request.body)

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
                email,
                name,
                password: hashedPassword,
            }
        })

        return reply.status(201).send({
            user,
            message: 'Usuário criado com sucesso',
            statusCode: 201
        })
    })
}

export async function updateUser(app: FastifyTypedInstance) {
    const userSchema = z.object({
        id: z.string(),
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8, "Senha muito curta"),
    })

    app.put('/users/:id', {
        schema: {
            description: 'Atualizar um usuário',
            tags: ['users'],
            body: userSchema,
            response: {
                200: z.object({
                    user: userSchema,
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
        const { id } = request.params as { id: string }
        const { name, email, password } = userSchema.parse(request.body)

        const existingUser = await prisma.users.findUnique({ where: { id } })
        if (!existingUser) {
            return reply.status(400).send({
                message: 'Usuário nao encontrado',
                statusCode: 400
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await prisma.users.update({
            where: { id },
            data: {
                email,
                name,
                password: hashedPassword,
            }
        })

        return reply.status(200).send({
            user,
            message: 'Usuário atualizado com sucesso',
            statusCode: 200
        })
    })
}

export async function deleteUser(app: FastifyTypedInstance) {
    app.delete('/users/:id', {
        schema: {
            description: 'Deletar um usuário',
            tags: ['users'],
            response: {
                200: z.object({
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
        const { id } = request.params as { id: string }

        const existingUser = await prisma.users.findUnique({ where: { id } })
        if (!existingUser) {
            return reply.status(400).send({
                message: 'Usuário nao encontrado',
                statusCode: 400
            })
        }

        await prisma.users.delete({ where: { id } })

        return reply.status(200).send({
            message: 'Usuário deletado com sucesso',
            statusCode: 200
        })
    })
}