define(['jquery', 'backbone', 'stache!templates/body'],
  function(jquery, Backbone, template) {
    //ItemView provides some default rendering logic
    return Backbone.Marionette.ItemView.extend({
      template: template,
    });
  });
