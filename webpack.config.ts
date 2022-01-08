import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const loaders = 
{
	rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.ts$/,
			loader: 'ts-loader',
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
			]
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
			]
		},
		{
			test: /(\.svg)|(felix[1-5].webp)|(\.GIF)|(biflag.webp)|(\.pdf)$/,
			loader: 'file-loader',
			options: {
				context: path.resolve(__dirname, 'src/client/main/assets'),
				name: 'public/[path][name].[ext]'
			}
		}
	]
}

module.exports = [
	{
		entry: './src/client/main/main.ts',
		devtool: 'source-map',
		module: loaders,
		output: {
			publicPath: '/',
			filename: 'main.js',
			path: path.resolve(__dirname, 'bin/client'),
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: 'src/client/container.html',
				minify: true
			}),
			new VueLoaderPlugin()
		]
	}
]