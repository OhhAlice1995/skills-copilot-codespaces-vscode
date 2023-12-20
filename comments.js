// create web server using express
const express = require('express');
const router = express.Router();
// import the comments controller
const commentsCtrl = require('../controllers/comments');

// export the router
module.exports = router;

// define the routes
router.get('/comments', commentsCtrl.index);
router.get('/comments/new', commentsCtrl.new);
router.get('/comments/:id', commentsCtrl.show);
router.post('/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);
router.get('/comments/:id/edit', commentsCtrl.edit);
router.put('/comments/:id', commentsCtrl.update);
