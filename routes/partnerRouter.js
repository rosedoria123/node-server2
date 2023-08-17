const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of partner: ${req.params.partnerId}`)
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('Post not supported')
})
.put((req, res) => {
    res.end(`Will update the partner:${req.body.name} and description: ${req.body.description}`)
})
.delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`)
});

module.exports = partnerRouter;