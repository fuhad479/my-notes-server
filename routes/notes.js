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
router.route("/:title").get(getNote).patch(updateNote).delete(deleteNote);

module.exports = router;
