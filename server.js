import { createServer } from 'http';
import { Server } from 'socket.io';
import redisAdapter from 'socket.io-redis';

const server = createServer();
const io = new Server(server);

// Configure Redis adapter
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));

const port = process.argv[2];

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log('Received message:', msg);
    io.emit('chat message', `Hi Client! this ${port} server`);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});