module.exports = {
	inputFolder: '/input',
	outputFolder: '/output',
	threads: 12,
	colorize: true,
	verboseEntwine: true,
	projection: {
		crs: 'EPSG:2154',
		defs: '+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
	}
}
