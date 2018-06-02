const route = '/shop';

module.exports = function(app) {
    app.get(route, (req, res) => {
        res.json('asd');
    });
};