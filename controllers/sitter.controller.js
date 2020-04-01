const mongoose = require('mongoose');

const Sitter = mongoose.model('Sitter');

module.exports.createSitter = (req, res, next) => {
  const sitter = new Sitter();
  sitter.services = req.body.services;
  sitter.animals = req.body.animals;
  sitter.availability = req.body.availability;
  sitter.payment = req.body.payment;
  sitter.address = req.body.address;
  sitter.years = req.body.years;
  sitter.information = req.body.information;
  sitter.photo = req.body.photo;
  sitter.userId = req.body.userId;
  sitter.userName = req.body.userName;
  sitter.userEmail = req.body.userEmail;
  

  sitter.save((err, doc)=>{
    if(!err) {
      res.send(doc);
    } 
    else {
      return handleError(err);
    }
  });
}

module.exports.getSitters = (req, res) => {
  Sitter.find((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log('Error in getting employees: ' + JSON.stringify(err, undefined, 2));
    }
  })
}

module.exports.getSitterById = (id, res) => {
  Sitter.findOne({"_id": new ObjectId(id)},(err, doc) => {
    if(!err) {
      res.send(doc);
    } else {
      console.log('Error in getting employees: ' + JSON.stringify(err, undefined, 2));
    }
  })
}