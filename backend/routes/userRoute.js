import express from 'express';
import User from '../models/userModel';
import {getToken} from "../util";

const router = express.Router();

router.get("/createadmin", async (req, res) =>{

    try {
        const user = new User({
            name: 'Saad',
            email: 'saadrajpt@pawsandclaws.com',
            password: '1234',
            isAdmin: true,
    
        });
    
        const newUser = await user.save();
        res.send(newUser);

    }catch (error) {
        res.send({msg: error.message});

    }
});


router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
  });


  router.post('/register', async (req, res) => {

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const registerUser = await user.save();

    if (registerUser) {
      res.send({
        _id: registerUser.id,
        name: registerUser.name,
        email: registerUser.email,
        isAdmin: registerUser.isAdmin,
        token: getToken(registerUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid Credentials.' });
    }
  });
  

export default router;
