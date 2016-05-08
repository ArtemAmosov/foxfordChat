var http = require('http');
var chat = require('./chat');
var fs = require('fs');

http.createServer(function(req, res) {
        switch(req.url) {
            case '/':
                sendFile('index.html', res);
        }
    }
).listen(3000);

function sendFile(fileName, res) {
    var fileContent = fs.readFileSync(fileName);
    res.end(fileContent);
}