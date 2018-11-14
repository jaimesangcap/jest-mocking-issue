import {
  authenticateUser
} from '../auth'

import * as validate from '../validate'

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
  // WORKS AS WELL NOW!
  // the issue before was that we need to get the correct order of require and mocking
  // MEANING: we need to put the require AFTER DECLARING the mock
  // using babel-jest solves this by hoisting the mock declaration on top
  // so we don't have to care about the correct order of declaring mocks and importing modules
  const spy = jest.spyOn(validate, 'validateUserCredentials')
  spy.mockImplementation(_ => {
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