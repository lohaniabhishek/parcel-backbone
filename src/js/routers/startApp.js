
// Import Backbone and its dependencies
var Backbone = require('backbone');
const Router = require('../routers/router');
const $ = require('jquery');

$(document).ready(function () {
    window.App = new Router();
    Backbone.history.start();
});