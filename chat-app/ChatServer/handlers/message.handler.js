let currentMessageId = 1;
// 메시지용 포맷으로 정리.
function createMessage(user, messageText) {
  return {
    _id: currentMessageId++,
    text: messageText,
    createdAt: new Date(),
    user: {
      _id: user.userId,
      name: user.username,
      avatar: user.avatar
    }
  };
}

function handlerMessage(socket, users) {
  socket.on("message", messageText => {
    console.log(messageText);
    const user = users[socket.id];
    const message = createMessage(user, messageText);
    // broadcast로 socket에 연결된 모든 클라이언트에게 전달.
    socket.broadcast.emit("message", message); // object형태로 전달.
  });
}

module.exports = { handlerMessage };
