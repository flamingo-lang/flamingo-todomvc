const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
module.exports = {
	mode: "development",
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					MiniCss.loader,
					"css-loader"
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new (require("terser-webpack-plugin"))()
		]
	},
	plugins: [
		new MiniCss()
	]
};
