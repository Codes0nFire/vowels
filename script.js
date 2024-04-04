const button = document.querySelector("#count");

const input = document.querySelector("#textarea");

const output = document.querySelector(".output");

button.addEventListener(`click`, () => {
  var valueOfInput = input.value.toLowerCase();


  var counter = 0;
  if (valueOfInput === "") {
    alert(`enter something first dude! 😉`)
  } else {
    for (i = 0; i < valueOfInput.length; i++) {
      if (
        valueOfInput[i] == `a` ||
        valueOfInput[i] == `e` ||
        valueOfInput[i] == `i` ||
        valueOfInput[i] == `o` ||
        valueOfInput[i] == `u` 
      ) {
        counter++;
      } 
    }
  }

  output.textContent = counter;
});
