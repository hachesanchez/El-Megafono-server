const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use("/users", require('./users.routes'))
router.use("/jobs", require('./job.routes'))
router.use("/experience", require('./experience.routes'))
router.use("/upload", require('./upload.routes'))

module.exports = router