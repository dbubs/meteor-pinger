Package.describe({
	summary: "Pinger NPM module packaged for Meteor."
});

Npm.depends({ 'net-ping': '1.1.7' });

Package.on_use(function (api) {
	api.add_files('pinger.js', 'server');
});