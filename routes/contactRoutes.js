const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.json({ "message": "Get all the contacts" });
});

router.route("/").post((req, res) => {
    res.json({ "message": "Create contacts" });
});

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