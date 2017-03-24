$(document).ready(function() {

var myString = document.getElementById('inputString');
var sumOp = document.getElementById('sumOperator');
var subOp = document.getElementById('subOperator');
var mulOp = document.getElementById('mulOperator');
var divOp = document.getElementById('divOperator');
var acOp = document.getElementById('ACbtn');
var ceOp = document.getElementById('CEbtn');
var result = document.getElementById('eqBtn');
var comma = document.getElementById('commaBtn');
var btn0 = document.getElementById('0btn');
var btn1 = document.getElementById('1btn');
var btn2 = document.getElementById('2btn');
var btn3 = document.getElementById('3btn');
var btn4 = document.getElementById('4btn');
var btn5 = document.getElementById('5btn');
var btn6 = document.getElementById('6btn');
var btn7 = document.getElementById('7btn');
var btn8 = document.getElementById('8btn');
var btn9 = document.getElementById('9btn');

sumOp.addEventListener('click',sumOperation);
subOp.addEventListener('click',subOperation);
mulOp.addEventListener('click',mulOperation);
divOp.addEventListener('click',divOperation);
acOp.addEventListener('click',delMemory);
result.addEventListener('click',resOperation);
comma.addEventListener('click',memComma);
btn0.addEventListener('click',memNum0);
btn1.addEventListener('click',memNum1);
btn2.addEventListener('click',memNum2);
btn3.addEventListener('click',memNum3);
btn4.addEventListener('click',memNum4);
btn5.addEventListener('click',memNum5);
btn6.addEventListener('click',memNum6);
btn7.addEventListener('click',memNum7);
btn8.addEventListener('click',memNum8);
btn9.addEventListener('click',memNum9);

var i = 0;
var array = [];
var myInput = "";
var numb1 = '';
var numb2 = '';
var numb3 = '';
var numComma = false;

function memNum0() {
  myInput += "0";
  myString.innerHTML = myInput;
};
function memNum1() {
  myInput += "1";
  myString.innerHTML = myInput;
};
function memNum2() {
  myInput += "2";
  myString.innerHTML = myInput;
};
function memNum3() {
  myInput += "3";
  myString.innerHTML = myInput;
};
function memNum4() {
  myInput += "4";
  myString.innerHTML = myInput;
};
function memNum5() {
  myInput += "5";
  myString.innerHTML = myInput;
};
function memNum6() {
  myInput += "6";
  myString.innerHTML = myInput;
};
function memNum7() {
  myInput += "7";
  myString.innerHTML = myInput;
};
function memNum8() {
  myInput += "8";
  myString.innerHTML = myInput;
};
function memNum9() {
  myInput += "9";
  myString.innerHTML = myInput;
};
function memComma() {
  if (numComma) {
    return;
  } else {
    myInput += ".";
    myString.innerHTML = myInput;
    numComma = true;
    return;
  }
}

function sumOperation() {
  var myNum = myInput.split("");
  if (isNaN(myNum[myNum.length - 1])) {
    return;
  } else {
    myInput += "+";
    myString.innerHTML = myInput;
    numComma = false;
    return;
  }
}
function subOperation() {
  var myNum = myInput.split("");
  if (isNaN(myNum[myNum.length - 1])) {
    return;
  } else {
    myInput += "-";
    myString.innerHTML = myInput;
    numComma = false;
    return;
  }
}
function mulOperation() {
  var myNum = myInput.split("");
  if (isNaN(myNum[myNum.length - 1])) {
    return;
  } else {
    myInput += "*";
    myString.innerHTML = myInput;
    numComma = false;
    return;
  }
}
function divOperation() {
  var myNum = myInput.split("");
  if (isNaN(myNum[myNum.length - 1])) {
    return;
  } else {
    myInput += "/";
    myString.innerHTML = myInput;
    numComma = false;
    return;
  }
}

function takeNumber(array,i) {
  var varNumb = '';
  while ((isNaN(array[i]) === false) || ((array[i]) === ".")){
    varNumb = varNumb+array[i];
    i++;
  }
  return [varNumb, i];
}
function mulNumbers() {
  [numb3, i] = takeNumber(array,i+1);
  return numb3;
}
function sumNumbers() {
  if (array[i] === '+') {
      [numb2, i] = takeNumber(array,i+1);
      while (array[i] === '*' || array[i] === '/') {
        if (array[i] === '*') {
          numb2 = parseFloat(numb2) * parseFloat(mulNumbers());
        }
        if (array[i] === '/') {
          numb2 = parseFloat(numb2) / parseFloat(mulNumbers());
        }
      }
      numb1 = parseFloat(numb1) + parseFloat(numb2);
  }
  if (array[i] === '-') {
      [numb2, i] = takeNumber(array,i+1);
        while (array[i] === '*' || array[i] === '/') {
          if (array[i] === '*') {
            numb2 = parseFloat(numb2) * parseFloat(mulNumbers());
          }
          if (array[i] === '/') {
            numb2 = parseFloat(numb2) / parseFloat(mulNumbers());
          }
        }
        numb1 = parseFloat(numb1) - parseFloat(numb2);
  }
  if (array[i] === '*') {
      [numb2, i] = takeNumber(array,i+1);
      numb1 = parseFloat(numb1) * parseFloat(numb2);
  }
  if (array[i] === '/') {
      [numb2, i] = takeNumber(array,i+1);
      numb1 = parseFloat(numb1) / parseFloat(numb2);
  }
  return numb1;
}

function resOperation() {
  var str = myInput;
  array = str.split('');
  if (isNaN(array[array.length - 1])) {
    array.pop();
  }
  i = 0;
  if (array[0] === "-") {
    array.shift();
    [numb1, i] = takeNumber(array,i);
    numb1 = parseFloat("-"+numb1);
  } else {
    [numb1, i] = takeNumber(array,i);
  }
  while (i < array.length) {
    numb1 = sumNumbers();
  }
  myString.innerHTML = numb1;
  i = numb1.length;
  myInput = numb1.toString();
  array = myInput.split("");
  numComma = false;
}

function delMemory() {
  i = 0;
  array = [];
  myInput = "";
  numb1 = "";
  numb2 = "";
  numb3 = "";
  myString.innerHTML = "";
  numComma = false;
}
});
