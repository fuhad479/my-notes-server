const createNote = async (req, res) => {
  res.status(201).send({ message: "create a new note" });
};

const getNotes = async (req, res) => {
  res.status(200).send({ message: "get all notes" });
};

const getNote = async (req, res) => {
  res.status(200).send({ message: "get a notes" });
};

const updateNote = async (req, res) => {
  res.status(200).send({ message: "update a note" });
};

const deleteNote = async (req, res) => {
  res.status(200).send({ message: "delete a note" });
};

module.exports = { createNote, getNotes, getNote, updateNote, deleteNote };
