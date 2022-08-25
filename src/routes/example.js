import express from 'express';

const router = express.Router();

router.get('/example', function(req, res) {
    res.send('This is the example page');
});

module.exports = router;