const Job = require('./../models/Job.model')


const getAllJobs = (req, res, next) => {

    Job
        .find()
        .populate({
            path: 'owner',
        })
        .populate({
            path: 'applicants',
        })
        .sort({ title: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const getOneJob = (req, res, next) => {

    const { id } = req.params

    Job
        .findById(id)
        .populate({
            path: 'owner',

        })
        .populate({
            path: 'applicants',
            select: 'username'
        })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const saveJob = (req, res, next) => {

    const { title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, applicants, startDate, contract } = req.body
    const { _id: owner } = req.payload

    Job
        .create({ title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, owner, applicants, startDate, contract })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const editJob = (req, res, next) => {

    const { title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, applicants } = req.body
    const { id: user_id } = req.params
    const { _id: owner } = req.payload


    Job
        .findByIdAndUpdate(user_id, { title, description, jobCategory, yearsOfExperience, grossSalary, location, travelAvailability, remoteJob, isFilled, laguages, owner, applicants }, { new: true })
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

}


const deleteJob = (req, res, next) => {

    const { id } = req.params

    Job
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))

}



module.exports = {
    getAllJobs,
    getOneJob,
    saveJob,
    editJob,
    deleteJob
}





