const express = require('express');
const router = express.Router();
const uploadController = require('../Controllers/upload.contr');

router.post("/upload", uploadController.uploadFile);
router.get("/check", (req,res) => {
    res.send("Hello");
});

module.exports = router;
