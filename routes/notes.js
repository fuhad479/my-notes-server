const { Router } = require("express");
const {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} = require("../handlers/notes");

const router = Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").get(getNote).patch(updateNote).delete(deleteNote);

module.exports = router;
