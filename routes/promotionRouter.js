const express = require('express');
const promotionRouter = express.Router();

//Base Route
promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the promotions to you');
    })
    .post((req, res) => {
        res.end(`Will add the promotion: "${req.body.name}" with description: "${req.body.description}"`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });

//promotion ID Route
promotionRouter.route('/:promotionId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send the promotion at ID: ${req.params.promotionId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operations not supported to a specific ID');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`Will update the promotion at ID: ${req.params.promotionId} with name: "${req.body.name}" and description: "${req.body.description}"`);
    })
    .delete((req, res) => {
        res.end(`Deleting the promotion at ID: ${req.params.promotionId}`);
    });

module.exports = promotionRouter;
