import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/prisma/client"
const server = new WebSocketServer({
    port: 3002
});

server.on("connection", async (socket) => {
    const user = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    console.log(user)
    socket.send("Hi there, you are connecting to the server")
})