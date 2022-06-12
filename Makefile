run:
	docker run --rm -d -v $(shell pwd):/soupsu.dev -p $(IP):443:443 --name soupsu.dev soupsu.dev:6.2

docker:
	docker build -t soupsu.dev:6.2 .
