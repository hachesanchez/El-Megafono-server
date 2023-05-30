const router = require("express").Router()

const User = require('../models/User.model')
const Experience = require('../models/Experience.model')
const Job = require('../models/Job.model')


router.get("/", (req, res, next) => {
    res.json("Jobs Routes");
});


router.get("/getAllJobs", (req, res, next) => {

    Job
        .find()
        .populate({
            path: 'owner',
            select: 'username'
        })
        .populate({
            path: 'applicants',
            select: 'username'
        })
        .select({ title: 1, imageUrl: 1, owner: 1, applicants: 1 })
        .sort({ title: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
});


router.get("/getOneJob/:id", (req, res, next) => {

    const { id } = req.params

    Job
        .findById(id)
        .populate({
            path: 'owner',
            select: 'username'
        })
        .populate({
            path: 'applicants',
            select: 'username'
        })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.post("/saveJob", (req, res, next) => {

    const { title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, owner, applicants } = req.body

    Job
        .create({ title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, owner, applicants })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.put("/edit/:id", (req, res, next) => {

    const { title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, owner, applicants } = req.body
    const { id } = req.params

    Job
        .findByIdAndUpdate(id, { title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, owner, applicants }, { new: true })
        .populate({
            path: 'owner',
            select: 'username'
        })
        .populate({
            path: 'applicants',
            select: 'username'
        })
        .then(response => res.json(response))
        .catch(err => next(err))
});


router.delete("/delete/:id", (req, res, next) => {

    const { id } = req.params

    Job
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))
});


module.exports = router




