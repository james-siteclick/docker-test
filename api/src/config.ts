interface ServerOptions {
  port: string;
  host: string;
}

interface Config {
  server: ServerOptions;
}

const config: Config = {
  server: {
    port: process.env.PORT || "3000",
    host: process.env.HOST || "0.0.0.0",
  },
};

export default config;
