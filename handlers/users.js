const register = async (req, res) => {
  res.status(201).send({ message: "register a new user" });
};

const login = async (req, res) => {
  res.status(201).send({ message: "login a user" });
};

module.exports = { register, login };
