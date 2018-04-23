// create a mountable router

const express = require('express')
const router = express.Router();

// middleware: ProblemService, handling business logic
const problemService = require('../services/problemService')

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// node server serves as a client, sending request to executor
const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();
// URL is provided by nginx, executor server is hidden behind nginx server
EXECUTOR_SERVER_URL = 'http://executor/build_and_run';
// Register a RESTful API call for node client
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');

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


// POST a build and run request to executor server
router.post('/build_and_run', jsonParser, (req, res) => {
  const code = req.body.code;
  const lang = req.body.lang;
  console.log("node send req to executor, lang: ", lang, "code: ", code);

  restClient.methods.build_and_run(
    {
        data: {"code": code, "lang": lang},
        headers: {'Content-Type': 'application/json'}
    },
    (data, response) => {
      // data is parsed response
      const output = `Build: [${data['build']}]  Output: [${data['run']}]`;
      res.json(output);
    }
  )
})


module.exports = router
