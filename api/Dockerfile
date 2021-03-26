# ------- Base

FROM node:14-alpine as base

# Create app directory
WORKDIR /opt/api

# ------- Dependencies
FROM base as dependencies  

COPY package*.json ./
RUN npm i

# ------- Application code 
FROM dependencies as app 

COPY src ./src
COPY tsconfig.json ./

RUN npx tsc

EXPOSE 3000