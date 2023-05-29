const router = require("express").Router();

const User = require('../models/User.model')

router.get("/", (req, res, next) => {
    res.json("User Routes");
});


router.get("/getAllUsers", (req, res, next) => {

    User
        .find()
        .select({ title: 1, imageUrl: 1 })
        .sort({ title: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
});


router.get("/:id"), (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}



module.exports = router;
