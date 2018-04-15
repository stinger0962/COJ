const mongoose = require('mongoose');

// create schema, model
const ProblemSchema = mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  difficulty: String,
});

// collection in database is : problemmodels
const ProblemModel = mongoose.model('ProblemModel', ProblemSchema);

module.exports = ProblemModel;
