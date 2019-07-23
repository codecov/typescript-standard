FROM node:lts-alpine

WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 3000
