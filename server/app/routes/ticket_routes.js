var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/api/tickets', (req, res) => {
        db.collection('tickets').find({}).toArray(function(err, tickets) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(tickets);
          }
        });
    });

    app.get('/api/tickets/:id', (req, res) => {
        const id = req.params.id;
        const ticketId = { '_id': new ObjectID(id) };
            db.collection('tickets').findOne(ticketId, (err, ticket) => {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    res.send(ticket);
              }
            });
    });

    app.post('/api/tickets', (req, res) => {
        db.collection('tickets').insert(req.body, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.delete('/api/tickets/:id', (req, res) => {
        const id = req.params.id;
        const ticketId = { '_id': new ObjectID(id) };
        db.collection('tickets').remove(ticketId, (err, ticket) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Ticket ' + id + ' deleted!');
          }
        });
    });

    app.put ('/api/tickets/:id', (req, res) => {
        const id = req.params.id;
        const ticketId = { '_id': new ObjectID(id) };
        db.collection('tickets').update(ticketId, req.body, (err, ticket) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(ticket);
          }
        });
      });
};