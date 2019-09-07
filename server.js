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
app.use(express.static(__dirname + '/dist/Review'));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'dist', 'Review', 'index.html');
    res.sendFile(index);
  });
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);