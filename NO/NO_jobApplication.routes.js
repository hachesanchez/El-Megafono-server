const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.json("Job Application Routes");
});

module.exports = router