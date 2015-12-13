var express = require('express');
var low = require('lowdb')

var app = express();
var db = low('db.json')

app.set('view engine', 'jade');


app.get('/', function(req, res){
  res.redirect('/budget_items');
})


// ----READ---- //
app.get('/budget_items', function(req, res){
  var budgetItems = db('budget_items').value();
  res.render('index', { title: "Budget Items", budget_items: budgetItems});
})

app.get('/budget_items/:id', function(req,res){
  var budgetItem = db('budget_items').find({id: req.params.id});
  res.render('detail', {budget_item: budgetItem});
})



app.listen(3000, function(){
  console.log('Listening on port 3000');
})
