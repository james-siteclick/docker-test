"use strict";

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST,
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World (hapi)!";
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
