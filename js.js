let text = "Witam serdecznie na naszej stronie 'Hotel Shakira'";
let outputElement = document.getElementById("text");

outputElement.style.cssText = `
  background-color: black;
  font-size: 40px;
  color: white;
`;

function showText(letterIndex) {
  if (letterIndex >= text.length) {
    return;
  }

  const letter = text[letterIndex];
  outputElement.textContent += letter;

  setTimeout(() => {
    showText(letterIndex + 1);
  }, 100);
}

showText(0);

setTimeout(() => {
  const confirmButton = document.createElement("button");
  confirmButton.setAttribute("id", "nextStation");
  confirmButton.innerHTML = "Confirm";
  confirmButton.style.cssText = `
    border: 2px solid white;
    height: 50px;
    width: 100px;
    background-color: black;
    font-size: 15px;
    color: white;
    box-shadow: 3px 3px 4px 2px white;
  `;

  document.querySelector("main").appendChild(confirmButton);

  confirmButton.addEventListener("click", () => {
    outputElement.remove();
    confirmButton.remove();
    const textTablica = "Пример текста";


outputElement.style.cssText = `
  background-color: black;
  font-size: 40px;
  color: white;
`;
function showTextTablica(letterIndexTb) {
  if (letterIndexTb >= textTablica.length) {
    return;
  }

  const letter = textTablica[letterIndexTb];

  outputElement.textContent += letter;

  setTimeout(() => {
    showTextTablica(letterIndexTb + 1);
  }, 100);
}

showTextTablica(0);
  });
}, 5500);


