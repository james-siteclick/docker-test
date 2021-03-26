"use strict";

import * as laabr from "laabr";
import * as Hapi from "@hapi/hapi";

import config from "./config";

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
      return "Hello World there Hapi";
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
