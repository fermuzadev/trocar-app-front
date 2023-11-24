// // ChatComponent.tsx

// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [messageInput, setMessageInput] = useState<string>('');
//   const socket = io('http://localhost:3001'); // Reemplaza con la URL de tu servidor Socket.IO

//   useEffect(() => {
//     // Manejar eventos del socket
//     socket.on('message', (message: string) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Desconectar el socket al desmontar el componente
//     return () => {
//       socket.disconnect();
//     };
//   }, [socket]);

//   const sendMessage = () => {
//     if (messageInput.trim() !== '') {
//       // Enviar el mensaje al servidor
//       socket.emit('message', messageInput);

//       // Limpiar el campo de entrada
//       setMessageInput('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>{message}</div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={messageInput}
//           onChange={(e) => setMessageInput(e.target.value)}
//         />
//         <button onClick={sendMessage}>Enviar</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
