var Todo = require('./models/todo'); // SUBTHIS

function getTodos(res) { // SUBTHIS
    Todo.find(function (err, todos) { // SUBTHIS

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format // SUBTHIS
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) { // SUBTHIS
        // use mongoose to get all todos in the database
        getTodos(res); // SUBTHIS
    });

    // get a single todo // SUBTHIS
    app.get('/api/todos/:todo_id', function (req, res) { // SUBTHIS
        Todo.findById(req.params.todo_id, function (err, todo) { // SUBTHIS
            if (err)
                res.send(err);

            res.json(todo);
        });
    });

    // edit a single todo
    app.put('/api/todos/', function (req, res) {
        Todo.findById(req.body._id, function (err, todo) {
            if (err) {
                res.send(err);
            } else {
                todo.text = req.body.text;
                todo.save().then(function(todo) {
                    res.json(todo);
                });
            }
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) { // SUBTHIS

        // create a todo, information comes from AJAX request from Angular
        Todo.create({ // SUBTHIS
            text: req.body.text,
            done: false
        }, function (err, todo) { // SUBTHIS
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res); // SUBTHIS
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) { // SUBTHIS
        Todo.remove({ // SUBTHIS
            _id: req.params.todo_id // SUBTHIS
        }, function (err, todo) { // SUBTHIS
            if (err)
                res.send(err);

            getTodos(res); // SUBTHIS
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};