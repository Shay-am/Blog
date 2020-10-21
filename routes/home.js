const router = require('express').Router();
const mongoose = require('mongoose');
const Jokenew = require('../models/Joke');


router.get('/', async (req, res, next) => {
    try {   
        const findJokes = await Jokenew.find({}).limit(2).sort('-posted').exec();     
            if(!findJokes) {
                res.redirect('new', { error: 'Nie ma zartow' })
            }else {
                req.flash('success', 'zalogowany')
                res.render('home', { jokes: findJokes })

            }
        
    } catch (error) {
        res.redirect('/')
    }
});

router.get('/new', (req, res) => {
    res.render('new')
})



module.exports = router;