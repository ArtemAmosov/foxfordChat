clients = [];

exports.publish = function(message) {
    console.log("publish %s", message);
};

exports.subscribe = function(res) {
    clients.push(res);
    console.log("subscribe" + res);
    console.log(clients.length);
};