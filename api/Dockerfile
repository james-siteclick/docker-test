# ------- Base

FROM node:14-alpine as base

# Install pm2
RUN npm install nodemon tsc tsc-watch -g

# Create app directory
WORKDIR /opt/api

# ------- Dependencies

FROM base as app 

COPY package*.json ./

RUN npm i 

EXPOSE 3000