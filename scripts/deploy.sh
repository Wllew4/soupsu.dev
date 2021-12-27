yarn install --frozen-lockfile
./scripts/build-all.sh --mode=production
node bin/server.js