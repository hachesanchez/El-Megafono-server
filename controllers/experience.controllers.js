const Experience = require('./../models/Experience.model')


const getAllExperiences = (req, res, next) => {

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
}


const getOneExperience = (req, res, next) => {

    const { id } = req.params

    Experience
        .findById(id)
        .populate({
            path: 'owner',
            select: 'username'
        })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const saveExperience = (req, res, next) => {

    const { title, organization, startDate, endDate, description } = req.body
    const { _id: owner } = req.payload

    Experience
        .create({ owner, title, organization, startDate, endDate, description })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const editExperience = (req, res, next) => {

    const { title, organization, startDate, endDate, description } = req.body
    const { id } = req.params
    const { _id: owner } = req.payload

    Experience
        .findByIdAndUpdate(id, { owner, title, organization, startDate, endDate, description }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const deleteExperience = (req, res, next) => {

    const { id } = req.params

    Experience
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))

}


module.exports = {
    getAllExperiences,
    getOneExperience,
    saveExperience,
    editExperience,
    deleteExperience
}


