import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = [
	{
		entry: './src/ts/main.ts',
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
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
					test: /\.scss$/,
					use: [
						"style-loader",
						"css-loader",
						"sass-loader"
					],
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: [
						"style-loader",
						"css-loader"
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
				},
				{
					test: /\.svg$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.js', '.vue'],
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'bin/site'),
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: 'src/pages/container.html',
				minify: true
			}),
			new VueLoaderPlugin()
		]
	}
];