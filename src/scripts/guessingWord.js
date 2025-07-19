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

function contains(guess, target) {
  return guess.filter(letter => target.includes(letter));
}

function rightOrder(guess, target) {
  let right = [];
  let notInPlaceGuess = [];
  let notInPlaceTarget = [];
  for (let index = 0; index < guess.length; index++) {
    if (guess[index] === target[index]) {
      right.push(guess[index]);
    }
    else {
      right.push("-")
      notInPlaceGuess.push(guess[index]);
      notInPlaceTarget.push(target[index]);
    }
    
  }
  console.log(contains(notInPlaceGuess, notInPlaceTarget)) //Checks which letters are not in place but are in the target word
  return right;
}




function guess(userGuess) {
  if (!targetWord) {
    console.log("The target word hasn't been loaded yet.");
    return;
  }
  
  let splitGuess = userGuess.split("");
  let contains = [];
  
}




console.log("right: "+ rightOrder(["w", "s", "b", "d"], ["w", "r", "s", "d"]));
