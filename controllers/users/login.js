const { Unauthorized } = require("http-errors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { User } = require("../../models")

const { SECRET_KEY } = process.env

const login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Unauthorized (`Email or password is wrong`)
  }
  const payload = {
    id: user._id
  }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" })
  await User.findByIdAndUpdate(user._id, { token })
  res.status(200).json({
    token,
    user: {
      email: user.email,    
      subscription: user.subscription       
    }
  })
}
  
module.exports = login