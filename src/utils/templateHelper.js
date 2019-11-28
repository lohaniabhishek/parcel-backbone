import ejs from 'ejs';
import _ from 'underscore';

const templateEngine = (template, data) => ejs.render(template, { _, ...data });

module.exports = templateEngine;