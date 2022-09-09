FROM node:18-alpine

# Build
COPY . /soupsu.dev
WORKDIR /soupsu.dev
RUN yarn install
RUN yarn build

# Package
FROM node:18-alpine
COPY --from=0 /soupsu.dev /soupsu.dev
WORKDIR /soupsu.dev
ENTRYPOINT node build
