# Titanium-Appcelerator-GeoFence-Module-iOS
Titanium Appcelerator GeoFence Module for iOS 64-bit Updated,   Tested on simulator, iphone device and published on app store.

Download zip from [release tab](https://github.com/gurudey/Titanium-Appcelerator-GeoFence-Module-iOS/releases) and include module into your project. 


	var ci_geofencing = require('ci.geofencing');

	var regions = []
	regions.push({
		"title" : "Willis Tower",
		"latitude" : 41.878844,
		"longitude" : -87.635942,
		"radius" : 100
	});

	regions.push({
		"title" : "Lincoln Park Zoo",
		"latitude" : 41.92007,
		"longitude" : -87.63251,
		"radius" : 500
	});

	regions.push({
		"title" : "Chicago Theater",
		"latitude" : 41.88535,
		"longitude" : -87.62745,
		"radius" : 200
	});

	ci_geofencing.startGeoFencing(regions, function(event) {
		Ti.API.info('info ' + JSON.stringify(event, null, 2));

		if ( event.type === "exited_region") {
			ci_geofencing.stopGeoFencing();
		}
	});
