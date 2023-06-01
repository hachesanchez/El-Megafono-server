const router = require("express").Router()

const { isAuthenticated } = require('../middlewares/verifyToken.middleware')

const {
    getAllExperiences,
    getOneExperience,
    saveExperience,
    editExperience,
    deleteExperience
} = require('./../controllers/experience.controllers')


router.get("/getAllExperiences", getAllExperiences)
router.get("/getOneExperience/:id", getOneExperience)
router.post("/saveExperience", isAuthenticated, saveExperience)
router.put("/edit/:id", isAuthenticated, editExperience)
router.delete("/delete/:id", deleteExperience)



module.exports = router