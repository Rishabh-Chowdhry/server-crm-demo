const express = require("express");
const { createForms } = require("../controller/form-controller");

const router = express.Router();
router.post("/create-forms", createForms);
router.get("");
module.exports = router;
