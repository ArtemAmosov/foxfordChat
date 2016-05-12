clients = [];

exports.publish = function(message) {
    console.log("publish %s", message);
    clients.forEach(function(res) {
        res.end(message);
    });
    clients = [];
};

exports.subscribe = function(res) {
    clients.push(res);
    console.log("subscribe" + res);
    console.log(clients.length);
};