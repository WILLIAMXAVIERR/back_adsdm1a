const express = require('express');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yaml');

const file = fs.readFileSync('./swagger.yaml', 'utf-8');
const swaggerDoc = yaml.parse(file);

const router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDoc));

module.exports = router;

