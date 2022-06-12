run:
	docker run --rm -ti -v $(shell pwd):/soupsu.dev -p 127.0.0.1:8000:8000 -e NODE_ENV=dev soupsudev

build_client:
	cd client && \
	yarn install && \
	yarn build

build_server:
	cd server && \
	yarn install && \
	yarn build

launch:
	cd server && \
	yarn launch

docker:
	docker build -t soupsudev .
