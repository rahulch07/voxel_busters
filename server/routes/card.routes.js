const express = require('express');
const router = express.Router();
const cardController = require('../controller/card.controller');

router.get('/', cardController.getCards);
router.get('/:industry', cardController.getFilter);

module.exports = router;