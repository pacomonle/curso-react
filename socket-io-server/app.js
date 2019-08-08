const express = require("express");
const axios = require("axios");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server); 


io.on("connection", socket => {
    console.log("user connected v3");
    console.log("el socket es "+console.log(socket));
    socket.on("chat", data => {
        socket.emit("chat", "receipt");
        console.log(data);
        if (data.writing) {
            socket.emit("chat", "El usuario "+data.userName+" está escribiendo un mensaje...")
        } else {
        //socket.emit("chat", "Gracias por decirme "+data);
        }
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

});



server.listen(port, () => console.log(`Listening on port ${port}`));


