const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const config = require('../config');
const request = require('request-promise-native');
const nanoid = require('nanoid');

const createRouter = () => {
    const router = express.Router();

    router.post('/sessions', async (req, res) => {
        const user = await User.findOne({username: req.body.username});

        if (!user) {
            return res.status(400).send({error: 'Username not found'});
        }

        const isMatch = await user.checkPassword(req.body.password);

        if (!isMatch) {
            return res.status(400).send({error: 'Password is wrong!'});
        }

        user.token = user.generateToken();

        await user.save();

        return res.send({message: 'User and password correct!', user});
    });

    router.post('/register' , async (req, res) => {
        try {
            const userData = req.body;

            const user = new User({
                username: userData.username,
                password: userData.password
            });

            await user.save();
            return res.send(user);
        } catch (e) {
            res.send({message: 'Sorry, something went wrong'});
            console.log(e, "ERROR REGISTER ROUTE")
        }
    });


    router.delete('/sessions', async (req, res) => {
        const token = req.get('Token');
        const success = {message: 'Logout success!'};

        if (!token) return res.send(success);

        const user = await User.findOne({token});

        if (!user) return res.send(success);

        user.generateToken();
        await user.save();

        return res.send(success);
    });

    return router;
};

module.exports = createRouter;
