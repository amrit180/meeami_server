const { applicationControllers } = require("../controllers");

const router = require("express").Router();

router.post("/document", applicationControllers.get_documents_by_id);
router.post("/demos", applicationControllers.get_demos);
router.post("/meta-data", applicationControllers.get_meta_data);

module.exports = router;
