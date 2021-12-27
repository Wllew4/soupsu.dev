import path from 'path'

module.exports = {
	entry: './src/ts/main.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/,
				use: [
				"style-loader",
				"css-loader",
				"sass-loader"
				]
			},
		],
  	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build/site/js'),
	},
};