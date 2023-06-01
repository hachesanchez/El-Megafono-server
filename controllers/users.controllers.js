const User = require('../models/User.model')


const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ username: 1, avatar: 1, role: 1, location: 1 })
        .sort({ username: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))

}


const getOneUser = (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .populate({
            path: 'experience',
            select: 'title'
        })
        .populate({
            path: 'savedJob',
            select: 'title'
        })
        .populate({
            path: 'favoriteProfessionals',
            select: 'username'
        })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const editUser = (req, res, next) => {

    const { email, username, role, avatar, description, location, jobCategory, yearsOfExperience, availability, travelAvailability, languages, skills, dailyRate, grossSalary, experience, savedJob, favoriteProfessionals } = req.body
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { email, username, role, avatar, description, location, jobCategory, yearsOfExperience, availability, travelAvailability, languages, skills, dailyRate, grossSalary, experience, savedJob, favoriteProfessionals }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const deleteUser = (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        // TODO: REVISAR ENDPOINTS RESOLUBLES CON SENDSTATUS
        .then(() => res.sendStatus(204))
        .catch(err => next(err))

}

module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
}
