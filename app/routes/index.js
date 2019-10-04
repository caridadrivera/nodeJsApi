const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
}


/* now that we have exported
the single route in the master file,
we can import it in the server
*/
