FROM node:16-alpine

RUN apk add make
WORKDIR /soupsu.dev
ENTRYPOINT make build_client && make build_server && make launch
