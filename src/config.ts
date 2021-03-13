interface ServerOptions {
  port: string;
  host: string;
}

interface Config {
  server: ServerOptions;
}

const config: Config = {
  server: {
    port: process.env.PORT || "8080",
    host: "0.0.0.0",
  },
};

export default config;
