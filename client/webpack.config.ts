import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const loaders = 
{
	rules:
	[
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.ts$/,
			loader: 'ts-loader',
			options:
			{
				appendTsSuffixTo: [/\.vue$/]
			}
		},
		{
			test: /\.scss$/,
			use:
			[
				// js -> style nodes
				"style-loader",
				// css -> js
				"css-loader",
				// sass -> css
				"sass-loader",
			]
		}
	]
}

module.exports =
[
	{
		entry: './src/main.ts',
		devtool: 'source-map',
		module: loaders,
		output:
		{
			publicPath: 'dist',
			filename: 'main.js',
			path: path.resolve(__dirname, 'public/dist'),
		},
		plugins:
		[
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin(
				{
					template: './src/container.html',
					minify: true
				}
			),
			new VueLoaderPlugin()
		]
	}
]