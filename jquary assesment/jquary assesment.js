// upper output is for showing value

let outputUpper = document.querySelector('#up-case');
// lower output is for showing the result
let outputLower = document.querySelector('#D-case');

// function to get number input
function pNum(e) {
  if (outputLower.innerHTML === '0') {
    outputLower.innerHTML = e.innerHTML;
  } else {
    outputLower.innerHTML += e.innerHTML;
  }
}

// clear all
function pressAllClear() {
  outputUpper.innerHTML = '';
  outputLower.innerHTML = '0';
}



// calculate button
function pEqual() {
  let exp = outputLower.innerHTML;
  outputUpper.innerHTML = exp;
  exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
  let result;
  try {
    result = eval(exp);
    // if decimal number more than 4 decimal places
    if (result.toString().indexOf('.') !== -1) {
      result = result.toFixed(4);
    }
  } catch (e) {
    result = 'Error';
  }
  outputLower.innerHTML = result;
}

function pOperator(e) {
  // check last operator
  let lastOperator = outputLower.innerHTML.slice(-1);
  if (lastOperator.includes('+', '-', '×', '÷')) {
    output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
  } else {
    outputLower.innerHTML += e.innerHTML;
  }
}

function pDot() {
  outputLower.innerHTML += '.';
}

function pBracket(e) {
  outputLower.innerHTML += e.innerHTML;
}

// attach keyboard event
document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case '0':
      pNum(document.querySelector('button:nth-child(2)'));
      break;
    case '1':
      pNum(document.querySelector('button:nth-child(5)'));
      break;
    case '2':
      pNum(document.querySelector('button:nth-child(6)'));
      break;
    case '3':
      pNum(document.querySelector('button:nth-child(7)'));
      break;
    case '4':
      pNum(document.querySelector('button:nth-child(9)'));
      break;
    case '5':
      pNum(document.querySelector('button:nth-child(10)'));
      break;
    case '6':
      pNum(document.querySelector('button:nth-child(11)'));
      break;
    case '7':
      pNum(document.querySelector('button:nth-child(13)'));
      break;
    case '8':
      pNum(document.querySelector('button:nth-child(14)'));
      break;
    case '9':
      pNum(document.querySelector('button:nth-child(15)'));
      break;
    case '+':
      pOperator(document.querySelector('button:nth-child(4)'));
      break;
    case '-':
      pOperator(document.querySelector('button:nth-child(8)'));
      break;
    case '*':
      pOperator(document.querySelector('button:nth-child(12)'));
      break;
    case '/':
      pOperator(document.querySelector('button:nth-child(16)'));
      break;
    case '.':
      pDot();
      break;
    case '(':
      pBracket(document.querySelector('button:nth-child(18)'));
      break;
    case ')':
      pBracket(document.querySelector('button:nth-child(19)'));
      break;
    case 'Enter':
      // prevent default action
      e.preventDefault();
      pEqual();
      break;
    case 'Backspace':
      pressClear();
      break;
    case 'Escape':
        pressAllClear();
      break;
  }
});