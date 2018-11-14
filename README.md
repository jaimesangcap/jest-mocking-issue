run `npm install`

run `jest --watch`

test should fail with error (despite of mocking)

```
 FAIL  __tests__/auth.test.js
  × returns null (3ms)

  ● returns null

    expect(received).toBeNull()

    Received: "iamtoken"

      32 |   })
      33 |
    > 34 |   expect(token).toBeNull()
         |                 ^
      35 | })

      at Object.toBeNull (__tests__/auth.test.js:34:17)
```

now comment out the code in `__tests__/auth.test.js` line `21-27` (see below)

```
jest.spyOn(validate, 'validateUserCredentials')
  validate.validateUserCredentials.mockImplementation(credentials => {
    return {
      isValid: false,
      user: null
    }
  })
```

then uncomment code in the same file `__tests__/auth.test.js` line `7-16` (see below)

```
jest.mock('../validate', () => {
  return {
    validateUserCredentials: jest.fn(credentials => {
      return {
        isValid: false,
        user: null
      }
    })
  }
})
```

test should **pass**

why is that???

any help will be appreciated :)
