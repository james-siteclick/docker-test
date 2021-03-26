# Docker test

Aims to provide a base project configuration for a project with:

- Docker
- Node.js
- Typescript
- Hapi
- Deployment on Heroku

# Running locally

`docker-compose up --build`

Changes are watched and the typescript automatically re-compiled when
there is a change.

The project is available at `http://localhost:3000`

# Running in Heroku

Changes are not watched.

The `Dockerfile` is used along with `heroku.yml` to build the project. However the database must be configured manually.
