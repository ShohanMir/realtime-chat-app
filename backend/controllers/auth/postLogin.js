const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res, next) => {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      const token = jwt.sign(
        {
          userId: user._id,
          mail,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: '24h',
        }
      );

      res.status(201).json({
        userDetails: {
          mail: user.email,
          token: token,
          username: user.username,
        },
      });
    }

    return res.status(400).send('Invalid credentials. Please try again');
  } catch (err) {
    res.status(500).send('Something went wrong. Please try again');
  }
};

module.exports = postLogin;
