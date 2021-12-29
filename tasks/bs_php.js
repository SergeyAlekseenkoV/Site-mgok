const bs = require('browser-sync');

module.exports = function bs_php() {
	bs.init({
		browser: ['chrome'],
		watch: true,
		proxy: 'http://127.0.0.1:8080/',
		logLevel: 'info',
		logPrefix: 'BS-PHP:',
		logConnections: true,
		logFileChanges: true,
	})
}