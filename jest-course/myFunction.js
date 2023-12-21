function myFunction(input) {
  if (typeof input !== 'number') {
    throw new Error('invalid input');
  }
}
module.exports = myFunction;
