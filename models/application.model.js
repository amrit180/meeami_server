const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  meta_description: {
    type: String,
    required: true,
  },
  meta_title: {
    reference: String,
    url: String,
  },
  og_image: {
    type: String,
    required: true,
  },
  page_title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "applications",
  },
  divs: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Application", applicationSchema);
