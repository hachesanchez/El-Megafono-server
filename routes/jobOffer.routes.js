const router = require("express").Router()

const JobOffer = require('../models/JobOffer.model')



router.get("/", (req, res, next) => {
    res.json("Jobs Routes");
});


router.get("/getAllJobs", (req, res, next) => {

    JobOffer
        .find()
        .select({ title: 1, imageUrl: 1 })
        .sort({ title: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
});


router.get("/getOneJob/:id"), (req, res, next) => {

    const { jobOffer_id } = req.params

    JobOffer
        .findById(jobOffer_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}


router.post("/saveJob", (req, res, next) => {

    const { title, description, length, inversions, imageUrl } = req.body

    Coaster
        .create({ title, description, length, inversions, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router








module.exports = router;
