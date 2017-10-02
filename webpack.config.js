module.exports = env =>
		require(`./config/webpack.${env}.js`);