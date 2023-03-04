const generateNoteId = (title) => {
  return title.toLowerCase().split(" ").join("-");
};

const processData = (data) => {
  let processedData = {};
  // generate note id based on title
  processedData["id"] = generateNoteId(data["title"]);
  // trim all whitespace from the data
  for (let i in data) {
    processedData[i] = data[i].trim();
  }
  return processedData;
};

module.exports = processData;
