const router = require('express').Router();
const Joke = require('../models/Joke');



export default router.post('/new', async (req, res) => {
    try {
        const newJoke = new Joke({
            joke: req.body.joke,
            nick: req.body.nick,
        })
        const newJokeSaved = await newJoke.save();
        if(newJokeSaved) {
            res.redirect('/')
        }
        res.json(newJokeSaved);
    } catch (error) {
        res.status(401).send({error: 'Error'})
    }

})

