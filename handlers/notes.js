const { client } = require("../database/connect");
const processData = require("../utils/processData");

const createNote = async (req, res) => {
  const note = processData(req.body);

  const db = await client.db("notes");
  const notes = await db.collection("notes");
  // insert new note to the database
  await notes.insertOne(note);
  // send the success response
  res.status(201).send(note);
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
  const { id } = req.params;

  const db = await client.db("notes");
  const notes = await db.collection("notes");
  // delete a note from the database
  await notes.deleteOne({ id });
  // send the success response
  res.status(200).send({ id });
};

module.exports = { createNote, getNotes, getNote, updateNote, deleteNote };
