var express = require('express');
var app = express();

app.get('/ninjas', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify({
            data: [
                {
                    name: 'Tom'
                },
                {
                    name: 'Joe'
                }
            ]
        })
    );
});

app.listen(8000);