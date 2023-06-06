const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const {
    getAllJobs,
    getOneJob,
    saveJob,
    editJob,
    deleteJob
} = require('./../controllers/job.controllers')


router.get("/getAllJobs", getAllJobs)
router.get("/getOneJob/:id", getOneJob)
router.post("/saveJob", isAuthenticated, saveJob)
router.put("/edit/:id", isAuthenticated, editJob)
router.delete("/delete/:id", deleteJob)

module.exports = router







