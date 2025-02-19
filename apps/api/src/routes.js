"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
const errorSchema = zod_1.z.object({
    message: zod_1.z.string(),
});
async function routes(app) {
    app.get('/users', {
        schema: {
            description: 'Listar todos os usuários',
            tags: ['users'],
            response: {
                200: zod_1.z.array(userSchema),
            },
        }
    }, async () => {
        const users = await prisma_1.default.user.findMany();
        return users;
    });
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
        const userData = request.body;
        const existingUser = await prisma_1.default.user.findUnique({
            where: {
                email: userData.email
            }
        });
        if (existingUser !== null) {
            return reply.code(409).send({ message: 'Este usuário já existe' });
        }
        const user = await prisma_1.default.user.create({ data: userData });
        return reply.code(201).send(user);
    });
    app.get('/users/:id', {
        schema: {
            description: 'Listar um usuário específico',
            tags: ['users'],
            params: zod_1.z.object({
                id: zod_1.z.string(),
            }),
            response: {
                200: userSchema,
            },
        }
    }, async (request) => {
        const { id } = request.params;
        const user = await prisma_1.default.user.findUnique({ where: { id } });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    });
    app.put('/users/:id', {
        schema: {
            description: 'Alterar informações de um usuário',
            tags: ['users'],
            params: zod_1.z.object({
                id: zod_1.z.string(),
            }),
            body: userSchema.omit({ id: true, createdAt: true, updatedAt: true }),
            response: {
                200: userSchema,
            },
        }
    }, async (request) => {
        const { id } = request.params;
        const userData = request.body;
        const user = await prisma_1.default.user.update({ where: { id }, data: userData });
        return user;
    });
    app.delete('/users/:id', {
        schema: {
            description: 'Deletar um usuário',
            tags: ['users'],
            params: zod_1.z.object({
                id: zod_1.z.string(),
            }),
            response: {
                200: userSchema,
            },
        }
    }, async (request) => {
        const { id } = request.params;
        const user = await prisma_1.default.user.delete({ where: { id } });
        return user;
    });
}
