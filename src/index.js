function check(str, bracketsConfig) {
  const work = str.split("");
  const stack = [];
  for (const br of work) {
    let good = bracketsConfig.filter((el) => el[0] === br)[0];
    if (good && stack.length > 0) {
      if (good[0] === stack[stack.length - 1][1]) {
        stack.pop();
        continue;
      }
    }
    if (good) {
      stack.push(good);
    } else if (stack.length === 0) return false;
    else {
      good = stack.pop();
      if (br !== good[1]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = check;
