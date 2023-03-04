const processData = (data) => {
  let processedData = {};
  for (let i in data) {
    processedData[i] = data[i].trim()
  }
  return processedData;
};

module.exports = processData;
