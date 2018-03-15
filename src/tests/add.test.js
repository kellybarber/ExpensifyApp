const add = (a, b) => a + b 
const greeting = name => `Hello ${name}`

test('Should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('Should show greeting with name', () => {
  const result = greeting('Kelly')
  expect(result).toBe('Hello Kelly')
})