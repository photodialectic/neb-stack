define(['jquery', 'backbone', 'marionette', 'underscore', 'mustache'],
  function(jquery, Backbone, Marionette, _, mustache) {
    var App = new Backbone.Marionette.Application();

    //Organize Application into regions corresponding to DOM elements
    //Regions can contain views, Layouts, or subregions nested as necessary
    App.addRegions({
      navRegion: "header",
      bodyRegion: "content",
      footerRegion: "footer",
    });

    App.addInitializer(function() {
      Backbone.history.start();
    });


    return App;

  });
