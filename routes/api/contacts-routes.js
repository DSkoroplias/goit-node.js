const express = require("express");

const ctrl = require("../../controllers");

const { authenticate } = require("../../middlewares");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:id", authenticate, ctrl.getContactsById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);
router.delete("/:id", ctrl.deleteContact);

module.exports = router;
