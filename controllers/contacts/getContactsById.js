const { ctrlWrapper } = require("../../utils");

const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const getContactsById = async (req, res) => {
  const { id } = req.params;
  // const result = await Contact.findOne({ _id: id });
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, `Contacts with ${id} not found`);
  }
  res.json(result);
};

module.exports = { getContactsById: ctrlWrapper(getContactsById) };
