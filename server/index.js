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

const app = express()
const apiPort = 4000
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


// todoRouter.route('/').get(function(req, res) {
//     Todo.find(function(err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todos);
//         }
//     });
// });
// todoRouter.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Todo.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });
// todoRouter.route('/update/:id').post(function(req, res) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;
//             todo.save().then(todo => {
//                 res.json('Todo updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });
// todoRouter.route('/add').post(function(req, res) {
//     console.log(req)
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))