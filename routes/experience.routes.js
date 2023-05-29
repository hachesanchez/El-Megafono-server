const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.json("Experience Routes");
});

module.exports = router