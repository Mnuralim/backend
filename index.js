import Hapi from "@hapi/hapi";
import routes from "./src/routes.js";

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 5000,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server is running on port ${server.info.port} `);
};

init();
