// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var ci_geofencing = require('ci.geofencing');
Ti.API.info("module is => " + ci_geofencing);

label.text = ci_geofencing.example();

Ti.API.info("module exampleProp is => " + ci_geofencing.exampleProp);
ci_geofencing.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = ci_geofencing.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}

