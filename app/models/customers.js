const md5 = require('md5');

module.exports.list = function (req, res) {
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM users', function (err, rows) {
            if (err) throw new Error;
            res.json(rows);
        })
    })
};

module.exports.add = function (req, res) {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password)
    };

    req.getConnection(function (err, connection) {
        connection.query('INSERT INTO users SET ?', [data], function (err) {
            if (err) throw new Error;
        });

        connection.query('SELECT * FROM users WHERE email = ?', [data.email], function(err, rows) {
            if (err) throw new Error;
            res.json(rows);
        });
    })
};

module.exports.update = function(req, res) {
    const data = {
        name: req.body.name,
        email: req.body.email
    };

    req.getConnection(function (err, connection) {
        connection.query('UPDATE users SET ? WHERE id = ?', [data, req.params.id], function(err) {
            if (err) throw new Error;
        });

        connection.query('SELECT * FROM users WHERE id = ?', [req.params.id], function(err, rows) {
            if (err) throw new Error;
            res.json(rows);
        });
    })
};
