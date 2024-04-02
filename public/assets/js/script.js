const typer = document.querySelector(".typer");

const text = [
  "FULL-STACK DEVELOPER",
  "WEB DEVELOPER",
  "ANDROID DEVELOPER",
  "ETHICAL HACKER",
  "YOU TUBER",
  "FREELANCER",
];

let currentText = "";
let currentTextIndex = 0;
let currentLetter = "";
let currentLetterIndex = 0;

const removeText = () => {
  if (currentLetterIndex > 0) {
    currentLetter = currentLetter.slice(0, currentLetterIndex - 1);
    currentLetterIndex--;
    typer.textContent = currentLetter;
    setTimeout(() => {
      removeText();
    }, 200);
  } else {
    setTimeout(() => {
      currentTextIndex++;
      type();
    }, 400);
  }
};

const type = () => {
  if (currentTextIndex >= text.length) currentTextIndex = 0;
  currentText = text[currentTextIndex];
  if (currentLetterIndex < currentText.length) {
    currentLetter += currentText[currentLetterIndex];
    currentLetterIndex++;
    typer.textContent = currentLetter;
    setTimeout(() => {
      type();
    }, 400);
  } else {
    setTimeout(() => {
      removeText();
    }, 400);
  }
};

type();
