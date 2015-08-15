define(['app/main', 'backbone', 'marionette', 'views/nav', 'views/body', 'views/footer'],
  function(App, Backbone, Marionette, Nav, Body, Footer) {

    return Backbone.Marionette.Controller.extend({
      initialize: function(options) {
        App.navRegion.show(new Nav());
        // App.footerRegion.show(new Footer());
      },
      //gets mapped to in AppRouter's appRoutes
      index: function() {
        // App.bodyRegion.show(new Body());
      }
    });

  });
