const server = require('http').createServer();
const io = require('socket.io')(server);

let users = {}
io.on('connection', (client) => {
  console.log(`new connection`);
  let user = '';
  client.on('login', (name) => {
    console.log(`user ${name} is joined`);
    user = name;
    users[name] = { client };
  });
  client.on('message', (msg) => {
    console.log(`> ${user} says: ${msg}`);
    for (let target of Object.values(users)) {
      if (!!target.client) {
        target.client.emit('message', {user, msg});
      }
    }
  });
  client.on('disconnect', () => {
    console.log(`user ${user} disconnected`);
    users[user] = { client: null };
  });
});

server.listen(8888);
