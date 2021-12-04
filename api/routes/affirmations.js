var express = require('express');
var router = express.Router();
const axios = require('axios')



router.get('/', async function(req, res, next) {
    console.log('working')
    let affirmations = await axios.get('https://www.affirmations.dev/')
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
      
      let newAffirmations = JSON.stringify(affirmations, getCircularReplacer());
      res.send(newAffirmations)
   
})
    


module.exports = router;
