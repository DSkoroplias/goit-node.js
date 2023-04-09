const getAllContacts = require("./contacts-controllers");
const getContactsById = require("./contacts-controllers");
const addContact = require("./contacts-controllers");
const deleteContact = require("./contacts-controllers");
const updateContactById = require("./contacts-controllers");
const updateStatusContact = require("./contacts-controllers");

module.exports = {
  getAllContacts,
  getContactsById,
  addContact,
  deleteContact,
  updateContactById,
  updateStatusContact,
};
