/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  // Step 1. Implement Shunting Yard algorithm to create RPN from the input string.
  const isNumber = (n) => /[0-9]/.test(n);
  const shuntingYard = (string) => {
    const stack = [];
    const output = [];
    const operators = {
      "+": {
        priority: 0,
      },
      "-": {
        priority: 0,
      },
      "*": {
        priority: 1,
      },
      "/": {
        priority: 1,
      },
    };
    let wasNumber = false;
    string
      .replace(/\s/g, "")
      .split("")
      .forEach((char) => {
        if (isNumber(char)) {
          if (wasNumber) {
            output[output.length - 1] = +(output[output.length - 1] + char);
            return;
          }
          wasNumber = true;
          output.push(+char);
          return;
        }
        wasNumber = false;

        // There should be an operator on the top of the stack.
        // If not, just push the op to the stack.
        if (!stack.length) {
          stack.push(char);
          return;
        }
        const { priority } = operators[char];
        while (
          stack.length &&
          operators[stack[stack.length - 1]].priority >= priority
        ) {
          output.push(stack.pop());
        }
        stack.push(char);
      });
    return output.concat(stack.reverse());
  };
  // Step 2. Implement RPN to calculate the result.
  const RPN = (arr) => {
    const stack = [];
    arr.forEach((char) => {
      if (isNumber(char)) {
        stack.push(char);
      } else {
        const op2 = stack.pop();
        const op1 = stack.pop();
        switch (char) {
          case "+": {
            stack.push(op1 + op2);
            break;
          }
          case "-": {
            stack.push(op1 - op2);
            break;
          }
          case "*": {
            stack.push(op1 * op2);
            break;
          }
          case "/": {
            stack.push(Math.floor(op1 / op2));
            break;
          }
          default: {
            throw new Error("unknown operator");
          }
        }
      }
    });
    return stack[0];
  };

  const rpn = shuntingYard(s);
  return RPN(rpn);
};

module.exports = calculate;
