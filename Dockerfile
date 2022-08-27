FROM node:18-alpine

WORKDIR /soupsu.dev
COPY . /soupsu.dev
RUN yarn install
RUN yarn build
ENTRYPOINT node build
