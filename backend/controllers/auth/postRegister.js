const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const postRegister = async (req, res, next) => {
  try {
    const { username, mail, password } = req.body;
    const userExists = await User.exists({ mail });

    if (userExists) {
      return res.status(409).send('E-mail already in use');
    }

    const encryptPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptPassword,
    });

    const token = 'JWT token';

    res.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).send('Error occured. Please try again');
  }
};

module.exports = postRegister;
