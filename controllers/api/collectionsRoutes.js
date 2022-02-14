const router = require('express').Router();
const { User_Comics, Comics, User } = require('../../models');

router.post('/add', async (req, res) => {
    console.log(req.body);
    try {
      const newCollection = await User_Comics.create(req.body);
        
      res.status(200).json(newCollection);
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  });

router.get('/:user_id', async (req, res) => {
   try {
       const userCollection = await User.findByPk(req.params.user_id, {
           include: [{ model: Comics, through: User_Comics, as: 'saved_comics'}]
       });
       res.status(200).json(userCollection)
   } 
   catch (err) {
    res.status(400).json(err);
  }
})  

  module.exports = router;