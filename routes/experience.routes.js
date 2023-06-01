const router = require("express").Router()

const User = require('../models/User.model')
const Experience = require('../models/Experience.model')
const Job = require('../models/Job.model')
const { isAuthenticated } = require('../middlewares/verifyToken.middleware')


router.get("/getAllExperiences", (req, res, next) => {

    Experience
        .find()
        .populate({
            path: 'owner',
            select: 'username'
        })
        .select({ title: 1, owner: 1, organization: 1, description: 1, startDate: 1, endDate: 1 })
        .sort({ startDate: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.get("/getOneExperience/:id", (req, res, next) => {

    const { id } = req.params

    Experience
        .findById(id)
        .populate({
            path: 'owner',
            select: 'username'
        })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.post("/saveExperience", isAuthenticated, (req, res, next) => {

    const { title, organization, startDate, endDate, description } = req.body
    const { _id: owner } = req.payload

    Experience
        .create({ owner, title, organization, startDate, endDate, description })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.put("/edit/:id", isAuthenticated, (req, res, next) => {

    const { title, organization, startDate, endDate, description } = req.body
    const { id } = req.params
    const { _id: owner } = req.payload

    Experience
        .findByIdAndUpdate(id, { owner, title, organization, startDate, endDate, description }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.delete("/delete/:id", (req, res, next) => {

    const { id } = req.params

    Experience
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))
});


module.exports = router