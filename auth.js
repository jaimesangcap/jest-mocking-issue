import {
  validateUserCredentials
} from './validate'

export function authenticateUser(credentials) {
  const result = validateUserCredentials(credentials)
  if (result.isValid) {
    return 'iamtoken'
  }

  return null
}