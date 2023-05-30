const router = require("express").Router()

const User = require('../models/User.model')
const Experience = require('../models/Experience.model')
const Job = require('../models/Job.model')



router.get("/", (req, res, next) => {
    res.json("Experience Routes");
});


router.get("/getAllExperiences", (req, res, next) => {

    Experience
        .find()
        .populate({
            path: 'owner',
            select: 'username'
        })
        .select({ title: 1, owner: 1, organization: 1, description: 1, startDate: 1, endDate: 1 })
        .sort({ startDate: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
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


router.post("/saveExperience", (req, res, next) => {

    const { owner, title, organization, startDate, endDate, description } = req.body

    Experience
        .create({ owner, title, organization, startDate, endDate, description })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.put("/edit/:id", (req, res, next) => {

    const { title, organization, startDate, endDate, description } = req.body
    const { id } = req.params

    Experience
        .findByIdAndUpdate(id, { title, organization, startDate, endDate, description }, { new: true })
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