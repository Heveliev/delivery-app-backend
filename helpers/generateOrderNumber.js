const MAX = 99999999;
const MIN = 10000000;

function generateOrderNumber() {
  const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
  return random.toString();
  };

  module.exports = generateOrderNumber;