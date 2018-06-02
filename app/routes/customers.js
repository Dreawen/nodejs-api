const route = '/customers';
const customers = require('../models/customers');

module.exports = function(app) {
    app.get(route, customers.list);
    app.post(route + '/add', customers.add);
    app.put(route + '/:id', customers.update);
};