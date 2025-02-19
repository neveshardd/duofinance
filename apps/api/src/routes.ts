import prisma from "../lib/prisma";
import { z } from "zod";
import { FastifyTypedInstance } from "./types";

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

const errorSchema = z.object({
    message: z.string(),
})

export async function routes(app: FastifyTypedInstance) {

    app.get('/users', {
        schema: {
            description: 'Listar todos os usuários',
            tags: ['users'],
            response: {
                200: z.array(userSchema),
            },
        }
    }, async () => {
        const users = await prisma.user.findMany()
        return users
    })

    app.post('/users', {
        schema: {
            description: 'Criar um novo usuário',
            tags: ['users'],
            body: userSchema.omit({ id: true, createdAt: true, updatedAt: true }),
            response: {
                201: userSchema,
                409: errorSchema
            },
        }
    }, async (request, reply) => {
        const userData = request.body

        const existingUser = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })

        if (existingUser !== null) {
            return reply.code(409).send({ message: 'Este usuário já existe' })
        }

        const user = await prisma.user.create({ data: userData })
        return reply.code(201).send(user)
    })

    app.get('/users/:id', {
        schema: {
            description: 'Listar um usuário específico',
            tags: ['users'],
            params: z.object({
                id: z.string(),
            }),
            response: {
                200: userSchema,
            },
        }
    }, async (request) => {
        const { id } = request.params
        const user = await prisma.user.findUnique({ where: { id } })
        if (!user) {
            throw new Error('Usuário não encontrado')
          }
        return user
    })

    app.put('/users/:id', {
        schema: {
            description: 'Alterar informações de um usuário',
            tags: ['users'],
            params: z.object({
                id: z.string(),
            }),
            body: userSchema.omit({ id: true, createdAt: true, updatedAt: true }),
            response: {
                200: userSchema,
            },
        }
    }, async (request) => {
        const { id } = request.params
        const userData = request.body
        const user = await prisma.user.update({ where: { id }, data: userData })
        return user
    })

    app.delete('/users/:id', {
        schema: {
            description: 'Deletar um usuário',
            tags: ['users'],
            params: z.object({
                id: z.string(),
            }),
            response: {
                200: userSchema,
            },
        }
    }, async (request) => {
        const { id } = request.params
        const user = await prisma.user.delete({ where: { id } })
        return user
    })
}

