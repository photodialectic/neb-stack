define(['jquery', 'backbone', 'stache!templates/nav'],
  function(jquery, Backbone, template) {
    //ItemView provides some default rendering logic
    return Backbone.Marionette.ItemView.extend({
      template: template,
    });
  });
