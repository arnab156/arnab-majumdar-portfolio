const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactList = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true }
  
});

const Contacts = mongoose.model("Contacts", contactList);

module.exports = Contacts;
