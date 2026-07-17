const express = require("express");

const router = express.router;

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
router.route("/").get((req, res) => {
    res.json({ "message": "Get all the contacts" });
});

module.exports = router;  