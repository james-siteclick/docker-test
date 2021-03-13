"use strict";

import * as laabr from "laabr";
import * as Hapi from "@hapi/hapi";

import config from "./config";

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const init: Hapi.server = async () => {
  // Create server
  const server: Hapi.server = Hapi.server(config.server);

  // Register plugins
  await server.register({
    plugin: laabr,
    options: {
      colored: true,
    },
  });

  // Register routes
  server.route({
    method: "GET",
    path: "/",
    handler: (request: Hapi.Request) => {
      return "Hello World (hapi)!";
    },
  });

  await server.start();
  server.log("Server running on %s", server.info.uri);

  return server;
};

process.on("unhandledRejection", (err: Error) => {
  console.error(err);
  process.exit(1);
});

init();
