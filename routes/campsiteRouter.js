const express = require('express');
const campsiteRouter = express.Router();

//Base Route
campsiteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the campsites to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: "${req.body.name}" with description: "${req.body.description}"`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

//Campsite ID Route
campsiteRouter.route('/:campsiteId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send the campsite at ID: ${req.params.campsiteId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operations not supported to a specific ID');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`Will update the campsite at ID: ${req.params.campsiteId} with name: "${req.body.name}" and description: "${req.body.description}"`);
    })
    .delete((req, res) => {
        res.end(`Deleting the campsite at ID: ${req.params.campsiteId}`);
    });

module.exports = campsiteRouter;
