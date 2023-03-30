const userService = require('../service/user.service');

const getUserLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.getByUser(email);
    if (!user) return res.status(404).json({ message: 'Not found' });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'internal error' });
  }
};

module.exports = {
  getUserLogin,
};