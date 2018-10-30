
'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/user')
        .get(todoList.users);

};