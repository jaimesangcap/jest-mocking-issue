const {
  authenticateUser
} = require('../auth')
const validate = require('../validate')

// THIS WORKS
// jest.mock('../validate', () => {
//   return {
//     validateUserCredentials: jest.fn(credentials => {
//       return {
//         isValid: false,
//         user: null
//       }
//     })
//   }
// })


test('returns null', () => {
  // NOT WORKING
  jest.spyOn(validate, 'validateUserCredentials')
  validate.validateUserCredentials.mockImplementation(credentials => {
    return {
      isValid: false,
      user: null
    }
  })

  const token = authenticateUser({
    username: 'not_existing',
    password: 'my_password'
  })

  expect(token).toBeNull()
})