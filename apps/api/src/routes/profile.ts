import { FastifyTypedInstance } from "../types";

export function profile(app: FastifyTypedInstance) {
    app.addHook('onRequest', async (request, reply) => {
        try {
            await request.jwtVerify()
        } catch (err) {
            return reply.status(401).send({
                message: 'Unauthorized',
                statusCode: 401
            })
        }
    })

    app.get('/profile', {
        schema: {
            description: 'Verificar se o usuário está logado',
            tags: ['auth'],
        }
    }, async (request, reply) => {
        return reply.status(200).send(request.user)
    })
}