const express = require('express'),
      router  = express.Router(),
      pagesController = require('../controllers/pages.controller'),
      eventsController = require('../controllers/events.controller');

module.exports = router;


router.get('/' , pagesController.showHome);
router.get('/contact' , pagesController.showContact);



// // Events Route
router.get('/events' , eventsController.showEvents);
// // Create Event Route
router.get('/create' , eventsController.create);
router.post('/store' , eventsController.store);
// // Update Event
router.get('/edit/:id' , eventsController.edit);
router.post('/update/:id' , eventsController.update);
// // Show Single Event Route
router.get('/events/:id' , eventsController.showSingleEvent);
// // Delete Event
router.get('/events/:id/delete' , eventsController.deleteEvent);