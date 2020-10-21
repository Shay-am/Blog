const router = require('express').Router();
const User = require('../models/User');




router.get('/login', async (req, res) => {
    res.render('login');
})


router.get('/signUp', async (req, res) => {
    res.render('signUp');
})

router.post('/signUp', async (req, res, next) => {
    try {
        const { user, email, password } = req.body;

        const newUser = await new User({
            user: user,
            email: email,
            password: password
        });
        const newUserSaved = await newUser.save();
        if(newUserSaved) {
            console.log(newUserSaved)
            res.redirect('/')
        }
        res.json();
    } catch (error) {
        console.log({error: 'ups error'})
    }
    
});


router.post('/login', async (req, res, next) => {
    try {
        const { user, password } = req.body;
        
        const userLogin = await User.findOne({ user });
        if(userLogin) {
            req.flash('success', "zalogowany");
            res.redirect('/');
        }      
    } catch (error) {
        console.log({ error: 'ups error'})
    }
})



module.exports = router;