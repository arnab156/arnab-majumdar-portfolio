const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactList = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  message: { type: String, required: false }
  
});

const Contacts = mongoose.model("Contacts", ContactList);

module.exports = Contacts;
