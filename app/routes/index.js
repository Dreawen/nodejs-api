const shopRoutes = require('./shop_routes');
module.exports = function(app, db) {
    shopRoutes(app, db);
};