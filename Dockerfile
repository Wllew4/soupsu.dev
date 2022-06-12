FROM node:16-alpine

WORKDIR /soupsu.dev
ENTRYPOINT \
	cd /soupsu.dev/client && yarn install && yarn build && \
	cd /soupsu.dev/server && yarn install && yarn build && \
	yarn launch
