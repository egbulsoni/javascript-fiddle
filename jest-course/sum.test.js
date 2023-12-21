const sum = require('./sum');
const myFunction = require('./myFunction');
const fetchData = require('./func');
const fetchPromise = require('./fetchPromise');

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('atribuição de objeto', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('null is falsey', () => {
  expect(null).toBeFalsy();
});

test('1 is truthy', () => {
  expect(1).toBeTruthy();
});

test('expect true to be true', () => {
  expect(true).toBeTrue;
});

test('throws on invalid input', () => {
  expect(() => {
    myFunction(invalidInput);
  }).toThrow();
});

test('the data is peanut butter', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

test('the data is peanut butter', () => {
  return expect(fetchPromise()).resolves.toBe('peanut butter');
});

// test('the fetch fails with an error', () => {
//   return expect(fetchPromise()).rejects.toThrow('error');
// });
test('the data is peanut butter', async () => {
  const data = await fetchPromise();
  expect(data).toBe('peanut butter');
});
