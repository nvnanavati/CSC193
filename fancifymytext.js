//wrap alert in a function
function handleMethod() {
  //alert("Hello, world!");
  // Get the textarea element by its id
  const textArea = document.getElementById("textArea");
  // Change the font size of the text area to 24pt
  textArea.style.fontSize = "24pt";
}

//function to uppercases the text in text area

function upperCase() {
  const textArea = document.getElementById("textArea");
  const text = textArea.value; // Get the current text from the textarea

  // Convert the text to uppercase
  const upperCasedText = text.toUpperCase();

  // Split the uppercase text into sentences
  const sentences = upperCasedText.split("."); // Split by periods

  // Process each sentence to add "-Moo" to the last word
  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].trim().split(" "); // Split the sentence into words
    if (words.length > 0) {
      const lastWordIndex = words.length - 1;
      words[lastWordIndex] += "-Moo"; // Append "-Moo" to the last word
    }
    sentences[i] = words.join(" "); // Rejoin the words into a sentence
  }

  // Rejoin the sentences into the final text
  textArea.value = sentences.join(". ");
}

function handleStyleChange(radio) {
  const textArea = document.getElementById("textArea");
  alert("You have been warned");

  if (radio.value == "fancyShmancy") {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    radio.value == "boringBetty";
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Add an onclick handler to the button
const btn = document.getElementById("biggerButton");

btn.onclick = handleMethod;

const button = document.getElementById("upButton");

button.onclick = upperCase;
