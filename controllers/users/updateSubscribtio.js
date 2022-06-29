const { User } = require("../../models");

const updateSubscribtion = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      subscription: result.subscription,
    },
  });
};

module.exports = updateSubscribtion;
