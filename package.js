Package.describe({
  name: 'radical3do:meteor-react-google-maps',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'React.js Google Maps component for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/radical-edo/meteor-react-google-maps.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.5.0',
  'react-google-maps': '4.10.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['react@0.14.3']);
  api.use(['cosmos:browserify@0.9.3']);
  api.addFiles('meteor-react-google-maps.browserify.js');
  api.export('ReactGoogleMaps');
});
