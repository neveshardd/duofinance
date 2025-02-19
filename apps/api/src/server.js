"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var cors_1 = require("@fastify/cors");
var fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
var swagger_1 = require("@fastify/swagger");
var swagger_ui_1 = require("@fastify/swagger-ui");
var app = (0, fastify_1.fastify)();
app.setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler);
app.setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler);
app.register(cors_1.fastifyCors, {
    origin: '*',
});
app.register(swagger_1.fastifySwagger, {
    openapi: {
        info: {
            title: 'Duofinance API',
            version: '1.0.0',
        },
    }
});
app.register(swagger_ui_1.default, {
    routePrefix: '/docs',
});
app.get('/health', function () { return 'ok'; });
app.listen({ port: 3333 }).then(function () {
    console.log('HTTP server running on http://localhost:3333');
});
