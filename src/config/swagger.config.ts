import swaggerJsdoc from 'swagger-jsdoc';
import {SwaggerOptions} from "swagger-ui-express";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Web3 Gateway API',
      version: '1.0.0',
      description: 'Web3 게이트웨이 API 문서',
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Web3Gateway",
        url: "https://github.com/LudexCS/BE_Web3Gateway.git",
      }
    },
    servers: [
      {
        url: 'http://api.uosludex.com/web3gateway',
        description: 'API 서버'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT 액세스 토큰을 입력하세요'
        }
      }
    }
  },
  apis: ['./src/route/*.ts']
};

export const specs = swaggerJsdoc(options);

export const swaggerUiOptions: SwaggerOptions = {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Web3 Gateway API 문서",
    swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true,
        filter: true,
        defaultModelsExpandDepth: 1,
    }
};