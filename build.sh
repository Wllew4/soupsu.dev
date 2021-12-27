rm -rf build
npx tsc
mkdir build/site
yarn build --mode=development
npx sass src/scss:build/site/css
cp -R src/pages build/site/pages
cp -R src/components build/site/components
cp -R src/img build/site/img