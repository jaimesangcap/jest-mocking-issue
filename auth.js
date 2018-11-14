const {
  validateUserCredentials
} = require('./validate')

function authenticateUser(credentials) {
  const result = validateUserCredentials(credentials)
  if (result.isValid) {
    return 'iamtoken'
  }

  return null
}

module.exports = {
  authenticateUser
}