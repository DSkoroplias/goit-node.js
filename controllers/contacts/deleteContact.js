const { ctrlWrapper } = require("../../utils");

const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({ message: "contact deleted" });
};

module.exports = { deleteContact: ctrlWrapper(deleteContact) };
