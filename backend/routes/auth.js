const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post('/login', (req, res, next) => {
    let fetchedUser;
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({message: 'Auth failed'});
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({message: 'Auth failed'});
            }
            const token = jwt.sign(
                {
                    email: fetchedUser.email,
                    userId: fetchedUser._id
                },
                'make-this-a-longer-secret',
                {expiresIn: '1h'}
            );
            res.status(200).json({token: token, expiresIn: 3600, role: fetchedUser.role, user: fetchedUser});
        })
        .catch(err => {
            return res.status(401).json({message: 'wrong password'});
        });
});

module.exports = router;
