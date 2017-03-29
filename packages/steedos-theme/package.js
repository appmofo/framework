Package.describe({
  name: 'steedos:theme',
  version: '0.0.6',
  summary: 'Steedos Theme',
  git: 'https://github.com/steedos/developer/packages/steedos-theme'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('ecmascript');
  api.use('blaze-html-templates');

  api.use('flemay:less-autoprefixer@1.2.0');

  api.use('steedos:adminlte@2.3.11_1');

  api.addFiles([
    'client/core.coffee',
    'client/admin-lte.less'
  ], "client");

  api.addAssets("client/background/beach.jpg", "client");
  api.addAssets("client/background/books.jpg", "client");
  api.addAssets("client/background/birds.jpg", "client");
  api.addAssets("client/background/cloud.jpg", "client");
  api.addAssets("client/background/sea.jpg", "client");
  api.addAssets("client/background/flower.jpg", "client");
  api.addAssets("client/background/fish.jpg", "client");

  api.export('Theme');

});

Package.onTest(function(api) {

});