let inputText = document.getElementById("input-text");
let submit = document.getElementById("submit");
let titleEl = document.getElementById("title");
let counterBtns = document.getElementById("counter-btns");
let numberEl = document.getElementById("number");
let decreaseBtn = document.getElementById("decrease");

// Get words from the input and save it to localStorage
function getWords() {
  if (inputText.value === "") return;
  let inputTextValue = inputText.value;

  // Save the title in the localStorage
  localStorage.setItem("input-title", inputTextValue);
  showWord();
  inputText.value = "";

  numberEl.innerHTML = 0;
  saveNumberToLocalStorage();
}

// Call the get words function
submit.addEventListener("click", getWords);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWords();
  }
});

// Show words from localStorage to the screen
function showWord() {
  titleEl.innerHTML = localStorage.getItem("input-title") || "Counter";
}
showWord();

// Logic of the Counter
numberEl.innerHTML = 0;
counterBtns.addEventListener("click", (e) => {
  if (e.target.id === "increase") {
    numberEl.innerHTML++;
    saveNumberToLocalStorage();
    showNumber();
  } else if (e.target.id === "decrease") {
    numberEl.innerHTML--;
    saveNumberToLocalStorage();
    showNumber();
  } else if (e.target.id === "reset") {
    numberEl.innerHTML = 0;
    saveNumberToLocalStorage();
    showNumber();
  }

  if (localStorage.getItem("number") > 0) {
    decreaseBtn.removeAttribute("disabled");
  }

  if (localStorage.getItem("number") < 1) {
    decreaseBtn.setAttribute("disabled", "disabled");
  }
});

// Save number to localStorage
function saveNumberToLocalStorage() {
  localStorage.setItem("number", numberEl.innerHTML);
}

// Show Number in the page from the localStorage
function showNumber() {
  numberEl.innerHTML = localStorage.getItem("number") || 0;
}
showNumber();
