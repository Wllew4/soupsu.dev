FROM node:18-alpine

# Build
COPY . /soupsu.dev
WORKDIR /soupsu.dev
RUN yarn install
RUN yarn build

# Clean up
RUN rm -rf src
RUN rm -rf static

ENTRYPOINT node build
