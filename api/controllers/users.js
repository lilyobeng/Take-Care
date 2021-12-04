const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET



async function signup(req, res) {
    console.log('reached signup')
    const user = new User(req.body);
    if (user){
      await user.save();
      const token = createJWT(user);
      res.json({ token });
      console.log(token)
    }else{
      res.status(400).json(err);
    }
  }

async function login(req, res){
    console.log('login reached')
    try{
        //search for the user with the provided email
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(401).json({err: 'bad credentials'})
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(isMatch){
                const token = createJWT(user)
                console.log(token)
                res.json({token})
            }else{
                return res.status(401).json({err: 'bad credentials'})
            }      
        })
    }catch(err){
        return res.status(401).json(err)
    }
}


function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    )
}

module.exports = {
    signup,
    login
}