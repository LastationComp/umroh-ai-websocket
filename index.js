const { createServer } = require('http');
const { Server } = require('socket.io');

const port = 4000;
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  socket.on('change-image', (data) => {
    socket.emit('profile-' + data.id, data.image);
  });
});

httpServer.listen(port, () => {
  console.log('Listening on PORT: ' + port);
});
