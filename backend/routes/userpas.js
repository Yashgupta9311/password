const express = require('express')
const router = express.Router()
const Userpas = require('../models/Uup')
const fetchuser = require('../middlewares/fetchuser')
const { body, validationResult } = require('express-validator');



// 1st router fetch the user passwords by the userid of jwttoken
router.get('/fetchuserpas', fetchuser, async (req, res) => {
    const userpas = await Userpas.find({ user: req.user.id })
    res.json(userpas)
})
// 2nd router add the user passwords
router.post('/adduup', [
    body('url')
        .notEmpty().withMessage('url is required')
        .isURL().withMessage("please enter a valid url"),

    body('username')
        .notEmpty().withMessage('username is required'),


    body('passwordmaneged')
        .notEmpty().withMessage('password is required')


], fetchuser, async (req, res) => {
    try {


        const { url, username, passwordmaneged } = req.body

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const userpas = new Userpas({
            url, username, passwordmaneged, user: req.user.id


        })
        const saveuserpas = await userpas.save()


        res.json(saveuserpas)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error " });

    }
})
// 3rd router ubdate or edit the user passwords
router.put('/ubdateuup/:id', fetchuser, async (req, res) => {
    const { url, username, passwordmaneged } = req.body;
    const newuserpas = {};
    
    if (url) { newuserpas.url = url; }
    if (username) { newuserpas.username = username; }
    if (passwordmaneged) { newuserpas.passwordmaneged = passwordmaneged; }

    let userpas = await Userpas.findById(req.params.id);
    
    if (!userpas) {
        return res.status(404).json({ error: "User data not found" });
    }

    // Check if the logged-in user owns the data
    if (userpas.user.toString() !== req.user.id) {
        return res.status(401).json({ error: "Unauthorized request" });
    }

    // Update the user data
    userpas = await Userpas.findByIdAndUpdate(req.params.id, { $set: newuserpas }, { new: true });
    
    res.json(userpas);
});
// 4th router delete the user passwords
router.delete('/deleteuup/:id', fetchuser, async (req, res) => {



    let userpas = await Userpas.findById(req.params.id);
    
    if (!userpas) {
        return res.status(404).json({ error: "User data not found" });
    }

    // Check if the logged-in user owns the  then only delete else through error
    if (userpas.user.toString() !== req.user.id) {
        return res.status(401).json({ error: "Unauthorized request" });
    }

    // delete the user data
    userpas = await Userpas.findByIdAndDelete(req.params.id);
    res.json({success:"succesfully detelted"})
    
   
});




module.exports = router