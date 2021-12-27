if [ -z "$1" ]
	then
		yarn build --mode=development
	else
		yarn build $1
fi
cp -R src/pages bin/site/pages
cp -R src/components bin/site/components
cp -R src/img bin/site/img