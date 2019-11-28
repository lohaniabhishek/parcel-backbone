var appViewTemplate = require('../templates/app.view.ejs');
import templateHelper from '../../utils/templateHelper';;
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

    const data = {
      messages: [
        "lorem",
        "ipsum"
      ],
      imgPath: img
    };

    this.$el.html(templateHelper(appViewTemplate, data));
  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);