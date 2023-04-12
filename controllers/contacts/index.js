const { getAllContacts } = require("./getAllContacts");
const { addContact } = require("./addContact");
const { getContactsById } = require("./getContactsById");
const { deleteContact } = require("./deleteContact");
const { updateContactById } = require("./updateContactById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getContactsById,
  addContact,
  deleteContact,
  updateContactById,
  updateStatusContact,
};
