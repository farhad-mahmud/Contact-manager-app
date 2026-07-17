const express = require("express");

const router = express.router;

router.router('/', (req, res) => {
    res.json({ "message": "Get all the contacts" });
})


module.exports = router;