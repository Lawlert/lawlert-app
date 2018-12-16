const mongoose = require("mongoose");

const billSchema = mongoose.Schema({
  bill_id: { type: String },
  bill_slug: { type: String },
  bill_type: { type: String },
  number: { type: String },
  bill_uri: { type: String },
  title: { type: String },
  short_title: { type: String },
  sponsor_title: { type: String },
  sponsor_id: { type: String },
  sponsor_name: { type: String },
  sponsor_state: { type: String },
  sponsor_party: { type: String },
  sponsor_uri: { type: String },
  gpo_pdf_uri: { type: String },
  congressdotgov_url: { type: String },
  govtrack_url: { type: String },
  introduced_date: { type: String },
  active: { type: Boolean },
  last_vote: { type: String },
  house_passage: { type: String },
  senate_passage: { type: String },
  enacted: { type: String },
  vetoed: { type: String },
  cosponsors: { type: Number },
  cosponsors_by_party: {
    type: Map,
    of: String
  },
  committees: { type: String },
  committee_codes: [String],
  subcommittee_codes: [String],
  primary_subject: { type: String },
  summary: { type: String },
  summary_short: { type: String },
  latest_major_action_date: { type: String },
  latest_major_action: { type: String }
});

module.exports = mongoose.model("Bill", billSchema);
