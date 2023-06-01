const router = require("express").Router();

const {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
} = require('./../controllers/users.controllers')


router.get("/getAllUsers", getAllUsers)
router.get("/getOneUser/:id", getOneUser)
router.put("/edit/:id", editUser)
router.delete("/delete/:id", deleteUser)



module.exports = router;
