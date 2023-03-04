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
  const db = await client.db("notes");
  const notes = await db.collection("notes");

  // get all notes reference from the database
  const cursor = await notes.find({}, { projection: { _id: 0 } });
  // transform the notes reference to an actual array
  const allNotes = await cursor.toArray();
  // send the success response
  res.status(200).send(allNotes);
};

const getNote = async (req, res) => {
  const { id } = req.params;

  const db = await client.db("notes");
  const notes = await db.collection("notes");
  
  // get a single note from the database
  const note = await notes.findOne({ id }, { projection: { _id: 0 } });
  // send the success response
  res.status(200).send(note);
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
