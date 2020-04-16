const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const generator = require('generate-password');
const checkAuth = require('../middleware/check-auth');

//Create User
router.post('/signup', function (req, res, next) {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });

        user
            .save()
            .then(result => {
                res.status(201).json({message: 'User Created', result: result});
            })
            .catch(err => {
                res.status(500).json({message: 'User Not Created', error: err});
            });
    });
});

// changes user password
router.post('/changepassword/:id', checkAuth, async function (req, res, next) {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    User.findByIdAndUpdate(req.params.id, {password: encryptedPassword})
        .then(result => {
            //load user
            User.findById(req.params.id).then(user => {
                res.status(200).json({message: 'Password changed', data: result});
            });
        })
        .catch(error => {
            res.status(500).json({message: 'Cannot change password', error: err});
        });
});

// reset user password
router.post('/resetpassword/', async function (req, res, next) {
    const password = generator.generate({length: 10, numbers: true});
    const encryptedPassword = await bcrypt.hash(password, 10);
    //load user
    User.findOne({email: req.body.email}).then(userObj => {
        userObj.password = encryptedPassword;

        userObj.save().then(result => {
            res.status(200).json({message: 'Password changed'});
        });
    });
});

router.post('/:id', async function (req, res, next) {
    const password = generator.generate({length: 10, numbers: true});

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email: req.body.email,
        password: encryptedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    user
        .save()
        .then(result => {
            emailService.sendNewMemberEmail(req.body.email, req.body.firstName, password);
            //send back ok response
            res.status(201).json({message: 'User Created', result: result});
        })
        .catch(err => {
            res.status(500).json({message: 'User Not Created', error: err});
        });
});

router.put('/:id', checkAuth, async function (req, res, next) {
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    };

    const userUpdateQuery = User.updateOne(
        {
            _id: req.params.id
        },
        userData
    )
        .then(async function () {
            //grab updated document and return it
            const newDoc = await User.findById(req.params.id);

            res.status(200).json({message: 'User Updated Successfully', data: newDoc});
        })
        .catch(err => {
            res.status(500).json({message: 'User Not Updated', error: err});
        });
});

module.exports = router;
