export const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Tasks API",
        version: "1.0.0",
        description: "Simple API de express y lowdb",
      },
      servers: [
        {
          url: "https://swagger-node-api.herokuapp.com/" //"http://localhost:3000",
        },
      ],
    },
    apis: ["./src/routes/*.ts"],
  };