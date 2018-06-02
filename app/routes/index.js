const customers = require('./customers');
const shop = require('./shop');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send(`<nav><a href="/customers">Пользователи</a></nav>`);
    });

    customers(app);
    shop(app);
};