const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner: _id, favorite }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email subscription");
  res.json({
    status: "success",
    code: 200,
    date: {
      result,
    },
  });
};

module.exports = getAll;
