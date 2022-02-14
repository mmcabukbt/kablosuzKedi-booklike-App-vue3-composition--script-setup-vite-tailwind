const { Server } = require("socket.io");

const io = new Server(3003, {
	cors: {
		//origin: "*",
	}

});

io.on("connection", (socket) => {
	console.log('Hoşgeldin socket=>', socket.id);
	socket.on("BM_ADDED", (newItem) => {
		socket.broadcast.emit("BM_ADD", newItem);
	});
	socket.on("BM_EDITED", (editedItem) => {
		socket.broadcast.emit("BM_EDIT", editedItem);
	});
	socket.on("BM_DELETED", (deletedItem) => {
		socket.broadcast.emit("BM_DELETE", deletedItem);
	});

});
