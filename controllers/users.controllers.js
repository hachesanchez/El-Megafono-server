const User = require('../models/User.model')
const { response } = require('express')


const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ username: 1, avatar: 1, role: 1, location: 1, availability: 1, jobCategory: 1, savedJob: 1 })
        .sort({ username: 1 })
        .then(response => res.json(response))
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
        })
        .populate({
            path: 'favoriteProfessionals',
        })
        .then(response => res.json(response))
        .catch(err => next(err))

}



const getCandidateUsers = (req, res, next) => {

    User
        .find({ role: 'PROFESIONAL' })
        .select({ username: 1, avatar: 1, role: 1, location: 1, availability: 1, jobCategory: 1 })
        .sort({ username: 1 })
        .then(users => res.json(users))
        .catch(err => next(err));
};


const editUser = (req, res, next) => {
    const { email, username, role, avatar, description, location, jobCategory, yearsOfExperience, availability, travelAvailability, languages, skills, dailyRate, grossSalary, experience, savedJob, favoriteProfessionals } = req.body;
    const { id } = req.params;

    const updatedUser = {
        email,
        username,
        role,
        avatar,
        description,
        location,
        jobCategory,
        yearsOfExperience,
        availability,
        travelAvailability,
        languages,
        skills,
        dailyRate,
        grossSalary,
        experience,
        savedJob,
        favoriteProfessionals
    };

    User.findByIdAndUpdate(id, updatedUser, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err));
};



const addSavedJob = (req, res, next) => {
    const { jobId } = req.params;
    const { userId } = req.body


    User.findByIdAndUpdate(
        userId,
        { $addToSet: { savedJob: jobId } },
        { new: true }
    )
        .then(response => res.json(response))
        .catch(err => next(err));
};



const deleteSavedJob = (req, res, next) => {
    const { jobId } = req.params;
    const { userId } = req.body

    User.findByIdAndUpdate(
        userId,
        { $pull: { savedJob: jobId } },
        { new: true }
    )
        .then(response => res.json(response))
        .catch(err => next(err));
};


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
    getCandidateUsers,
    editUser,
    addSavedJob,
    deleteSavedJob,
    deleteUser
}
