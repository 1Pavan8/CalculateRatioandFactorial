const rat = require("../ratio/index");
const fac = require("../factorial/index");

function ratioAndFactorial(a, b, c) {
  const ratio = rat(a, b);
  const factorial = fac(c);
  return { ratio, factorial };
}
module.exports = ratioAndFactorial;
