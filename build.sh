rm -rf build
npx tsc
mkdir build/site
mv build/ts build/site/js
npx sass src/scss:build/site/css
cp -R src/html build/site/html
cp -R src/img build/site/img