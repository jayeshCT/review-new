const express = require('express');
const app = express();
const path = require('path');
const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}
app.use(express.static(__dirname + '/dist/floating-refuge-53579'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/floating-refuge-53579/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);