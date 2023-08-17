const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of campsite: ${req.params.campsiteId}`)
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('Post not supported')
})
.put((req, res) => {
    res.end(`Will update the campsite:${req.body.name} and description: ${req.body.description}`)
})
.delete((req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`)
});

module.exports = campsiteRouter;