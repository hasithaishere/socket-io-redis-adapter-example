import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to the server');
  setInterval(() => {
    socket.emit('chat message', 'Hello, server!, I\'m client-1');
  }, 1000);
});

socket.on('chat message', (msg) => {
  console.log('Received message from server:', msg);
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});