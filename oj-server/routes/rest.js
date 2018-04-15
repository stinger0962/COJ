// create a mountable router

const express = require('express')
const router = express.Router();

// middleware: ProblemService, handling business logic
const problemService = require('../services/problemService')

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


// Get all problems
router.get('/problems', (req, res) => {
  problemService.getProblems()
  .then(problems => res.json(problems))
  .catch(err => res.status(404).send(err.stack));
})

// Get a problem by id
router.get('/problems/:id', (req, res) => {
  const id = req.params.id;
  problemService.getProblem(+id)
  .then(problem => res.json(problem))
  .catch(err => res.status(404).send('Not found'));
})

// POST a new problem, problem is passed by request body
router.post('/problems', jsonParser, (req, res) => {
  problemService.addProblem(req.body)
  .then(problem => {
          res.json(problem)
  }, error => {
          res.status(400).send('Problem already exists')
  });
})

module.exports = router
