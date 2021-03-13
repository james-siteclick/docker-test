import * as hapi from "@hapi/hapi";
import "reflect-metadata";
import { getManager, createConnection, Connection } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

// Import entities
import { Test } from "../entity/Test";

// Registers the TypeORM connection
const typeORMPlugin = {
  register: async () => {
    const connection = await createConnection();
  },

  pkg: {
    name: "typeORMPlugin",
    version: "1.0.0",
  },
};

module.exports = typeORMPlugin;
