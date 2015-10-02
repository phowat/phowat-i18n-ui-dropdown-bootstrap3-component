Package.describe({
  name: 'phowat:i18n-ui-dropdown-bootstrap3-component',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Replacement for tap-i18n-ui\'s i18n_dropdown as a Bootstrap 3 dropdown component.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/phowat/phowat-i18n-ui-dropdown-bootstrap3-component',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use(['templating', 'amplify', 'tap:i18n', 'tap:i18n-ui'], 'client');

  api.addFiles([
    'dropdown-bootstrap.html',
    'dropdown-bootstrap.js',
  ], 'client');
});
