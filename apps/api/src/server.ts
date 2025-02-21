import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { createUsers, deleteUser, listUsers, updateUser } from "./routes/users";
import fastifyJwt from "@fastify/jwt";
import { login } from "./routes/login";
import { session } from "./routes/session";
import register from "./routes/register";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: '*' })

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Duofinance API',
            version: '1.0.0',
        },
    },
    transform: jsonSchemaTransform
});

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: true
      },
});

app.register(createUsers)
app.register(listUsers)
app.register(login)
app.register(session)
app.register(deleteUser)
app.register(updateUser)
app.register(register)

if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined');
    process.exit(1);
}

app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET,
})

app.get('/', async () => {
    return { 'message': 'Duofinance API' }
})

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log('HTTP server running')
})
