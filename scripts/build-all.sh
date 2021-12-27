chmod +x ./scripts/build-back.sh
chmod +x ./scripts/build-front.sh

yarn install --frozen-lockfile

./scripts/build-back.sh
./scripts/build-front.sh $1