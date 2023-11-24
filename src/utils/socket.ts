import io from 'socket.io-client';

const Socket = io('http://localhost:3000'); 

Socket.on('connect', () => {
  console.log('SocketIO connected 🚀');
});

export default Socket;