const router = require('express').Router()
const {User} = require('../../models')

router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
    //   req.session.save(() => {
    //     req.session.loggedIn = true;
  console.log(req.body)
        res.status(200).json(dbUserData);
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll()
      res.status(200).json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports = router
  

