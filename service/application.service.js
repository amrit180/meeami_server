const getDocumentData = async (req) => {
  return require(`../jsons/document/${req.body.slug}.json`);
};
const getDemosDocument = async () => {
  return require(`../jsons/demos/demos.json`);
};
const getMetaDocument = async (req) => {
  return require(`../jsons/metadata/${req.body.slug}.json`);
};

module.exports = {
  getDocumentData,
  getDemosDocument,
  getMetaDocument,
};
