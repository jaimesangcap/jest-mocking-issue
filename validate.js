function validateUserCredentials(credentials) {
  return {
    isValid: true,
    user: credentials
  }
}

module.exports = {
  validateUserCredentials
}