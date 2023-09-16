const admin = require("../firebase");

const getDocumentData = async (req) => {
  const result = await admin
    .firestore()
    .collection("pages")
    .doc(req.body.slug)
    .collection("divs")
    .get();
  return result;
};
const getDemosDocument = async () => {
  const result = await admin.firestore().collection("demos").get();
  return result;
};
const getMetaDocument = async (req) => {
  const result = await admin
    .firestore()
    .collection("pages")
    .doc(req.body.slug)
    .get();
  return result;
};

module.exports = {
  getDocumentData,
  getDemosDocument,
  getMetaDocument,
};
