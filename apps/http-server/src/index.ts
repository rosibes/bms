import express from "express"
import { prismaClient } from "@repo/prisma/client"

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hi there")
})

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await prismaClient.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.status(200).json({
        message: "Signup successful!",
        id: user.Id
    })
})

app.listen(3001)