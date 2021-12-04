var express = require('express');
var router = express.Router();
var journalsCtrl = require('../controllers/journals')

router.post('/', journalsCtrl.create);

// router.get('/delete/:deleteJournalIdNumber', journalsCtrl.removeJournalEntry);

// router.post('/form', journalsCtrl.handleForm);

// router.get('/form', journalsCtrl.showForm)

// router.get('/edit/:id', journalssCtrl.editJournalEntry);

// router.put('/:id', journalsCtrl.editJournalAndUpdate);


module.exports = router;