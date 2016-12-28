var Item = require('./models/item'); // SUBTHIS

function getItems(res) { // SUBTHIS
    Item.find(function (err, items) { // SUBTHIS

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(items); // return all items in JSON format // SUBTHIS
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all items
    app.get('/api/items', function (req, res) { // SUBTHIS
        // use mongoose to get all items in the database
        getItems(res); // SUBTHIS
    });

    // get a single item // SUBTHIS
    app.get('/api/items/:item_id', function (req, res) { // SUBTHIS
        Item.findById(req.params.item_id, function (err, item) { // SUBTHIS
            if (err)
                res.send(err);

            res.json(item);
        });
    });

    // edit a single item
    app.put('/api/items/', function (req, res) {
        Item.findById(req.body._id, function (err, item) {
            if (err) {
                res.send(err);
            } else {
                item.text = req.body.text;
                item.save().then(function(item) {
                    res.json(item);
                });
            }
        });
    });

    // create item and send back all items after creation
    app.post('/api/items', function (req, res) { // SUBTHIS

        // create an item, information comes from AJAX request from Angular
        Item.create({ // SUBTHIS
            text: req.body.text,
            done: false
        }, function (err, item) { // SUBTHIS
            if (err)
                res.send(err);

            // get and return all the items after you create another
            getItems(res); // SUBTHIS
        });

    });

    // delete an item
    app.delete('/api/items/:item_id', function (req, res) { // SUBTHIS
        Item.remove({ // SUBTHIS
            _id: req.params.item_id // SUBTHIS
        }, function (err, item) { // SUBTHIS
            if (err)
                res.send(err);

            getItems(res); // SUBTHIS
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};