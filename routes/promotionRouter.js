const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of promotion: ${req.params.promotionId}`)
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('Post not supported')
})
.put((req, res) => {
    res.end(`Will update the promotion:${req.body.name} and description: ${req.body.description}`)
})
.delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`)
});

module.exports = promotionRouter;