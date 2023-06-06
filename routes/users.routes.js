const router = require("express").Router();

const {
    getAllUsers,
    getOneUser,
    getCandidateUsers,
    addSavedJob,
    deleteSavedJob,
    editUser,
    deleteUser
} = require('./../controllers/users.controllers')


router.get("/getAllUsers", getAllUsers)
router.get("/getOneUser/:id", getOneUser)
router.get("/getCandidateUsers", getCandidateUsers)
router.put("/addSavedJob/:jobId", addSavedJob)
router.put("/deleteSavedJob/:jobId", deleteSavedJob)
router.put("/edit/:id", editUser)
router.delete("/delete/:id", deleteUser)



module.exports = router;
