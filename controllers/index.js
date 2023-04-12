const { getAllContacts } = require("./contacts/getAllContacts");
const { addContact } = require("./contacts/addContact");
const { getContactsById } = require("./contacts/getContactsById");
const { deleteContact } = require("./contacts/deleteContact");
const { updateContactById } = require("./contacts/updateContactById");
const { updateStatusContact } = require("./contacts/updateStatusContact");

module.exports = {
  getAllContacts,
  getContactsById,
  addContact,
  deleteContact,
  updateContactById,
  updateStatusContact,
};
