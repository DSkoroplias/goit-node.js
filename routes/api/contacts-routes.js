const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const { validateBody } = require("../../utils");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getContactsById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContactById);

router.delete("/:id", ctrl.deleteContact);

module.exports = router;
