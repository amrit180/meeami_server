const { applicationService } = require("../service");

module.exports = {
  get_documents_by_id: async (req, res) => {
    try {
      const result = await applicationService.getDocumentData(req);
      res.json(result);
    } catch (error) {
      res.json({ error: error.message, success: false });
    }
  },
  get_demos: async (req, res) => {
    try {
      const result = await applicationService.getDemosDocument();
      res.json(result);
    } catch (error) {
      res.json({ error: error.message, success: false });
    }
  },
  get_meta_data: async (req, res) => {
    try {
      const result = await applicationService.getMetaDocument(req);
      res.json(result);
    } catch (error) {
      res.json({ error: error.message, success: false });
    }
  },
};
