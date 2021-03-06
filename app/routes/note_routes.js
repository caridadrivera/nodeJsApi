/* every route has its own file in node ;
 individual files for each individual route
 that is then exported for  the master route file (index.js) to use it*/
module.exports = function(app, db){
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').insert(note, (err, result) => {
      if(err) {
        res.send({'error': 'An error has occured'});
      } else {
        res.send(result.ops[0])
      }
    })
  })
}
