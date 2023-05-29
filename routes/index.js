const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use("/users", require('./users.routes'))
router.use("/jobs", require('./jobOffer.routes'))
router.use("/job-application", require('./jobApplication.routes'))
router.use("/experience", require('./experience.routes'))

module.exports = router