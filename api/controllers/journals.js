const User = require('../models/user');
const Journal = require('../models/journal');

async function create(req, res){
    const journal = new Journal(req.body)
    await journal.save();
    res.json(journal);
    
}

async function removeEntry (req, res){
    let deleteEntry = await Workout.deleteOne({ 
        _id: req.params.deleteEntryIdNumber 
     });
     console.log(req.params)
     res.json(journal)
}









module.exports = {
    create,
    removeEntry
}
















