Package.describe({
	summary: "Pinger NPM module packaged for Meteor."
});

Npm.depends({ 'jjg-ping': '1.0.0' });

Package.on_use(function (api) {
	api.add_files('pinger.js', 'server');
});