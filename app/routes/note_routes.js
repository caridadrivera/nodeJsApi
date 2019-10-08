/* every route has its own file in node ;
 individual files for each individual route
 that is then exported for  the master route file (index.js) to use it*/
module.exports = function(app, db){
  app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  })
}
