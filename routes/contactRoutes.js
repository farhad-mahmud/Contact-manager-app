const express = require("express");

const router = express.Router();

// importing getcontact api call from controller..
const { getContact } = require("../controllers/contactController");


router.route("/").get(getContact);

// using import getcontact here ..

router.route("/").post();

router.route("/:id").put((req, res) => {
    res.json({ "message": `update contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
    res.json({ "message": `update contact for ${req.params.id}` });
});

router.route("/:id").get((req, res) => {
    res.json({ "message": `get contacts for ${req.params.id}` });
});

module.exports = router;