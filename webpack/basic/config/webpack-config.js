/* global __basedir */

// Import Modules.
const path = require('path');

module.exports = {
	entry: {
		'js/index': [path.resolve(__basedir, 'assets/js/index.js')],
		'css/index': [path.resolve(__basedir, 'assets/css/index.scss')]
	},
	process: {
		html: true,
		js: true,
		css: true,
		images: true,
		fonts: true,
		typescript: false
	},
	plugins: {
		CleanWebpackPlugin: true,
		MiniCssExtractPlugin: true,
		FixStyleOnlyEntriesPlugin: true,
		ImageminPlugin: false,
		BundleAnalyzerPlugin: false,
		HtmlWebpackPlugin: true,
	}
};
