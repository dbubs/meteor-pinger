Package.describe({
	summary: "Pinger NPM module packaged for Meteor."
});

Npm.depends({ 'pinger': '0.0.4' });

Package.on_use(function (api) {
	api.add_files('pinger.js', 'server');
});