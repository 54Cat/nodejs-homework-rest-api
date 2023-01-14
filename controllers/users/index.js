const signup = require("./signup")
const login = require("./login")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const updateAvatar = require("./updateAvatar")
const updateSubscription = require("./updateSubscription")
const verifyEmail = require("./verifyEmail")
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
  signup,
  login,
  getCurrent,
  logout,
  updateAvatar,
  updateSubscription,
  verifyEmail,
  resendVerifyEmail
}