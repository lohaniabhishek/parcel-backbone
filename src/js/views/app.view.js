// Import Underscore for templating
var _ = require('underscore');
var appViewTemplate = require('../templates/app.view.ejs');
var ejs = require('ejs');
var _ = require('underscore');
// Import Backbone and its dependencies
var Backbone = require('backbone');
import "../../css/local.css";
import "../../scss/local.scss";
import img from "../../img/tenant.svg";

// Declare our options we'll use to extend the base view
var viewOptions = {
  el: '#custom',

  initialize: function () {
    // Render the view
    this.render();
  },

  render: function () {
    // Render the template
    var renderedHtml = ejs.render(appViewTemplate, { _, messages: ["I", "am", "working"], imgPath: img });
    this.$el.html(renderedHtml);
  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);