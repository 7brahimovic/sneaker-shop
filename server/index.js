const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const sexRouter = require('./routes/sex-router')
const movieRouter = require('./routes/movie-router')
const todoRouter = require('./routes/todo-router')
const mongoose = require('mongoose')
let Todo = require('./models/todo-model')
const shoplistRouter = require('./routes/shoplist-router')
const orderRouter = require('./routes/order-router')
const socketio = require('socket.io')
const { WebSocketServer } = require('ws')

const app = express()
const apiPort = 4000
const wsPort = 8081
const wsIoPort = 4002
app.use(cors())
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/sexes',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/sexes', sexRouter);
app.use('/shoplists', shoplistRouter);
app.use('/order', orderRouter);

//port 4000
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

//port 8081
const server = app.listen(wsPort, () => {
    console.log(`Listening on ${wsPort}`)
})
const wss = new WebSocketServer({ server });
const users = new Set();
wss.on('connection', ws => {
    console.log('Client connected')
    const userRef = {
        socket: socket,
    };
    users.add(userRef);

    // const sendNowTime = setInterval(()=>{
    //     ws.send(String(new Date()))
    // },1000)

    ws.on('message', data => {
        data = data.toString()
        // ws.send(data)

        wss.clients.forEach(client => {
            client.send(data);
        })
    })

    ws.on('close', (code, reason) => {
        console.log(`User disconnected with code ${code} and reason ${reason}!`);
        users.delete(userRef);
    });
})


const sendMessage = (message) => {
	for (const user of users) {
		user.socket.send(JSON.stringify(message));
	}
};
//port 4002
const serverForSocketIo = require('http').Server(app).listen(wsIoPort, () => {
    console.log(`Listening on ${wsIoPort}`)
})
const wssio = socketio(serverForSocketIo, {
    cors: {
        origin: '*',
    }

})

wssio.on('connection', socket => {
    console.log('success connect!')
    /*只回傳給發送訊息的 client*/
    socket.on('getMessage', message => {
        socket.emit('getMessage', message)
    })

    /*回傳給所有連結著的 client*/
    socket.on('getMessageAll', message => {
        wssio.sockets.emit('getMessageAll', message)
    })

    /*回傳給除了發送者外所有連結著的 client*/
    socket.on('getMessageLess', message => {
        socket.broadcast.emit('getMessageLess', message)
    })

})
