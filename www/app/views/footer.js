define(['jquery', 'backbone', 'stache!templates/footer'],
    function (jquery, Backbone, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template: template,
        });
    });
