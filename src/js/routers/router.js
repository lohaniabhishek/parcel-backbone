const Backbone = require('backbone');
const $ = require('jquery');
const AppView = require('../views/app.view');

const Router = Backbone.Router.extend({
    routes: {
        '': 'appView'
    },
    appView: function () {
        this.appView = new AppView({});
        this.appView.render();
    }
});

module.exports = Router;