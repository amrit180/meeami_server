const { applicationControllers } = require("../controllers");

const router = require("express").Router();

router.post("/document", applicationControllers.get_documents_by_id);
router.post("/demos", applicationControllers.get_demos);

module.exports = router;
