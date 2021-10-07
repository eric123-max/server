const users = require('./users/users.service.js');
const dishes = require('./dishes/dishes.service.js');
const menu = require('./menu/menu.service.js');
const comment = require('./comment/comment.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(dishes);
  app.configure(menu);
  app.configure(comment);
};
