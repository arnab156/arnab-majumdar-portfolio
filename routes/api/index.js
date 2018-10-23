const router = require("express").Router();
const contactRoutes = require("./contacts");

// contacts routes
router.use("/contacts", contactRoutes);

module.exports = router;
