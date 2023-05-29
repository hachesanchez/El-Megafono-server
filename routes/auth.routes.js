const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.json("Auth Routes");
});

module.exports = router