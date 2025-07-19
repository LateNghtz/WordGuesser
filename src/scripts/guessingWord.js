let length = 6;
let apiUrl = `https://random-word-api.vercel.app/api?words=1&length=${length}`;
let targetWord = "";
let splitTargetWord = ""

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    targetWord = data[0];
    splitTargetWord = targetWord.split("");
    console.log(splitTargetWord)
    console.log("Word to guess:", targetWord);
  })
  .catch(error => {
    console.error("Error fetching word:", error);
});





function guess(userGuess) {
  if (!targetWord) {
    console.log("The target word hasn't been loaded yet.");
    return;
  }

  if (userGuess === targetWord) {
    console.log("Correct guess!");
  } else {
    console.log("Incorrect. Try again.");
  }
}
