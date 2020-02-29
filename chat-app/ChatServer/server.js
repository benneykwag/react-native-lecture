const io = require("socket.io")();
const uuidv1 = require("uuid/v1");
const messageHandler = require("./handlers/message.handler");
const users = {};

function createUserAvatarUrl() {
  const rand1 = Math.round(Math.random() * 200 + 100);
  const rand2 = Math.round(Math.random() * 200 + 100);
  return `https://placeimg.com/${rand1}/${rand2}/any`;
}
function createUsersOnline() {
  const values = Object.values(users);
  const onlyWithUsernames = values.filter(u => u.username !== undefined);
  return onlyWithUsernames;
}
io.on("connection", socket => {
  console.log("a user connected");
  console.log(socket.id);

  // 소켓 아이디를 키로
  users[socket.id] = { userId: uuidv1() };
  socket.on("join", username => {
    users[socket.id].username = username;
    users[socket.id].avatar = createUserAvatarUrl();
    messageHandler.handlerMessage(socket, users);
  });
  socket.on("disconnect", () => {
    console.log("disconnect socket id : ", socket.id);
    delete users[socket.id];
    io.emit("action", {
      type: "users_online",
      data: createUsersOnline()
    });
  });
  socket.on("action", action => {
    console.log("action ", action);
    switch (action.type) {
      case "server/hello":
        console.log("hello event 발생: ", action.data);
        socket.emit("action", { type: "message", data: "안녕하세요 ^^" });
        break;
      case "server/join":
        console.log("Server Join event", action.data);
        users[socket.id].username = action.data;
        users[socket.id].avatar = createUserAvatarUrl();
        io.emit("action", {
          type: "users_online",
          data: createUsersOnline()
        });
        // join되면 자신의 정보를 전송한다.
        socket.emit("action", { type: "self_user", data: users[socket.id] });
        break;
      case "server/private-message":
        const conversationId = action.data.conversationId;
        console.log("sss======", action.data);
        // 내 소켓
        const from = users[socket.id].userId;
        const userValues = Object.values(users);
        const socketIds = Object.keys(users);
        for (let i = 0; i < userValues.length; i++) {
          // 대화 상대를 찾는다.
          if (userValues[i].userId === conversationId) {
            // 대화 상대의 socketId
            const socketId = socketIds[i];
            // 대화상대에게 메시지를 전송한다.
            io.sockets.sockets[socketId].emit("action", {
              type: "private-message",
              data: {
                ...action.data,
                conversationId: from
              }
            });
            break;
          }
        }
        break;
    }
  });
});
io.listen(3001);
