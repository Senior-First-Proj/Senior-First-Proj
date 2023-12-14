const router = require('express').Router();
const bankController = require("../controllers/bankController");

router.get("/getAll", bankController.getUser);
router.post("/adduser",bankController.addUser)

module.exports = router;
