const { getAllContacts } = require("./contacts");
const { addContact } = require("./contacts");
const { getContactsById } = require("./contacts");
const { deleteContact } = require("./contacts");
const { updateContactById } = require("./contacts");
const { updateStatusContact } = require("./contacts");
const { register } = require("./auth");
const { login } = require("./auth");
const { getCurrent } = require("./auth");
const { logout } = require("./auth");

module.exports = {
  getAllContacts,
  getContactsById,
  addContact,
  deleteContact,
  updateContactById,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
};
