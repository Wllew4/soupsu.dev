import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

module.exports = [
	{
		entry: './src/ts/main.ts',
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: 'vue-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.ts$/,
					loader: 'ts-loader',
					exclude: /node_modules/,
					options: {
						appendTsSuffixTo: [/\.vue$/]
					}
				},
				{
					test: /\.s[ac]ss$/,
					use: [
						"style-loader",
						"css-loader",
						"sass-loader"
					],
					exclude: /node_modules/,
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
							options: {
								minimize: true
							}
						}
					],
					exclude: /node_modules/,
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.js', '.vue'],
		},
		output: {
			filename: 'main.js',
			path: path.resolve(__dirname, 'bin/site'),
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: 'src/pages/container.html'
			}),
			new VueLoaderPlugin()
		]
	}
];