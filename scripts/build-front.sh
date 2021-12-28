if [ -z "$1" ]
	then
		yarn build --mode=development
	else
		yarn build $1
fi