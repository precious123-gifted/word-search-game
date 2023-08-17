const gameBox = document.querySelector('.game-box')
const Boxes = document.querySelectorAll('.box')

const boxesArray = Array.from(Boxes)
let set_boxes_id = Boxes.forEach( (box,index) =>{box.id = index}
)

const wordsToFindDiv = document.querySelectorAll('.words')
const wordsToFindDivArray = Array.from(wordsToFindDiv)

const dictionaryWords = [
    { key: "LETUS", value: "LETUS" },
    { key: "SNAKE", value: "SNAKE" },
    { key: "BLUE", value: "BLUE" },
    { key: "VALLEY", value: "VALLEY" },
    { key: "SHADOW", value: "SHADOW" },
    { key: "DOCTOR", value: "DOCTOR" },
    { key: "MIGRAINE", value: "MIGRAINE" },
    // { key: "HYPERTENSION", value: "HYPERTENSION" },
    // { key: "DIABETES", value: "DIABETES" },
    // { key: "ANEMIA", value: "ANEMIA" },
    // { key: "ARTHRITIS", value: "ARTHRITIS" },
    // { key: "PNEUMONIA", value: "PNEUMONIA" },
    // { key: "ABSTRACT", value: "ABSTRACT" },
    // { key: "REALITY", value: "REALITY" },
    // { key: "REALISM", value: "REALISM" },
    // { key: "WATERMELON", value: "WATERMELON" },
    // { key: "PINEAPPLE", value: "PINEAPPLE" },
    // { key: "MANGO", value: "MANGO" },
    // { key: "CHERRY", value: "CHERRY" },
    // { key: "KIWI", value: "KIWI" },
    // { key: "APPLE", value: "APPLE" },
    // { key: "BANANA", value: "BANANA" },
    // { key: "ORANGE", value: "ORANGE" },
    // { key: "BUTTERFLY", value: "BUTTERFLY" },
    // { key: "ANT", value: "ANT" },
    // { key: "BEE", value: "BEE" },
    // { key: "MOSQUITO", value: "MOSQUITO" },
    // { key: "SPIDER", value: "SPIDER" },
    // { key: "FLY", value: "FLY" },
    // { key: "MOTH", value: "MOTH" },
    // { key: "LADYBUG", value: "LADYBUG" },
    // { key: "CRICKET", value: "CRICKET" },
    // { key: "GRASSHOPPER", value: "GRASSHOPPER" },
    // { key: "COCKROACH", value: "COCKROACH" },
    // { key: "MANTIS", value: "MANTIS" },
    // { key: "BEETLE", value: "BEETLE" },
    // { key: "CATERPILLAR", value: "CATERPILLAR" },
    // { key: "DRAGONFLY", value: "DRAGONFLY" },
    // { key: "FIREANT", value: "FIREANT" },
    // { key: "CRANEFLY", value: "CRANEFLY" },
    // { key: "MOSQUITOHAWK", value: "MOSQUITOHAWK" },
    // { key: "TARANTULA", value: "TARANTULA" },
    // { key: "WASP", value: "WASP" },
    // { key: "CENTIPEDE", value: "CENTIPEDE" },
    // { key: "CICADA", value: "CICADA" },
    // { key: "EARWIG", value: "EARWIG" },
    // { key: "FLEA", value: "FLEA" },
    // { key: "GLOWWORM", value: "GLOWWORM" },
    // { key: "HONEYBEE", value: "HONEYBEE" },
    // { key: "LICE", value: "LICE" },
    // { key: "MOSQUITOFISH", value: "MOSQUITOFISH" },
    // { key: "NIGHTCRAWLER", value: "NIGHTCRAWLER" },
    // { key: "PILLBUG", value: "PILLBUG" },
    // { key: "QUEENBEE", value: "QUEENBEE" },
    // { key: "ROVEBEETLE", value: "ROVEBEETLE" },
    // { key: "SCORPION", value: "SCORPION" },
    // { key: "TERMITE", value: "TERMITE" },
    // { key: "UMBRELLAWASP", value: "UMBRELLAWASP" },
    // { key: "VELVETANT", value: "VELVETANT" },
    // { key: "WEEVIL", value: "WEEVIL" },
    // { key: "XANTHORRHIZA", value: "XANTHORRHIZA" },
    // { key: "YELLOWJACKET", value: "YELLOWJACKET" },
    // { key: "ZEBRALONGWING", value: "ZEBRALONGWING" },
    // { key: "APHID", value: "APHID" },
    // { key: "BEDBUG", value: "BEDBUG" },
    // { key: "CLOVERMITE", value: "CLOVERMITE" },
    // { key: "DRAGONANT", value: "DRAGONANT" },
    // { key: "EARTHWORM", value: "EARTHWORM" },
    // { key: "FRUITFLY", value: "FRUITFLY" },
    // { key: "GNAT", value: "GNAT" },
    // { key: "HORNET", value: "HORNET" },
    // { key: "ICHTHYURUS", value: "ICHTHYURUS" },
    { key: "JERUSALEM", value: "JERUSALEM" },
    { key: "KATYDID", value: "KATYDID" },
    { key: "LACEBUG", value: "LACEBUG" },
    { key: "LOVE", value: "LOVE" },
    { key: "HOME", value: "HOME" }
];




// addLettersToDiv();


const numColumns = 15; 
const rows = [];
const columns = Array.from({ length: numColumns }, () => []);

let add_boxes_to_column_and_row_array = boxesArray.forEach((box, index) => {
    const rowIndex = Math.floor(index / numColumns);
    rows[rowIndex] = rows[rowIndex] || [];
    rows[rowIndex].push(box);
    
    const arrayBoxIndex = index % numColumns;
    columns[arrayBoxIndex].push(box);
});
 




// function addLettersToDiv() {
//     let boxIndex = 0;
//     let wordIndex = 0;
//     let letterIndex = 0;
//     let arrayBoxIndex = Math.floor(Math.random() * 15);
//     let directionBoxIndex = 0;
  
//     let wordsArr = dictionaryWords.map(word => word.value);
//     let letterArr = wordsArr.map(word => [...word]);
  
//     let display_the_words_that_are_meant_to_be_found = wordsToFindDivArray.forEach((wordDiv, index) => {
//       wordDiv.textContent = wordsArr[index];
//     });
  
//     letterArr.forEach((word, index) => {
//       // Find a column with enough space for the word
//       while (directionBoxIndex + word.length > columns[arrayBoxIndex].length) {
//         arrayBoxIndex = (arrayBoxIndex + 1) % 15; // Move to the next column
//         directionBoxIndex = 0; // Reset directionBoxIndex
//       }
  
//       let currentDirection = columns[arrayBoxIndex];
  
//       for (let i = 0; i < word.length; i++) {
//         if (directionBoxIndex >= currentDirection.length) {
//           // Move to the next column
//           arrayBoxIndex = (arrayBoxIndex + 1) % 15;
//           currentDirection = columns[arrayBoxIndex];
//           directionBoxIndex = 0; // Reset directionBoxIndex
//         }
  
//         currentDirection[directionBoxIndex].textContent = word[i];
//         directionBoxIndex += 1;
//       }
//     });
//   }
  




function addDictionaryWordLettersToDiv() {
    const wordsArr = dictionaryWords.map(word => word.value);
    const letterArr = wordsArr.map(word => [...word]);
    const boxHolders = [columns, rows];
    let currentBoxHolderIndex = 0; // Start with columns
    let currentBoxHolder = boxHolders[currentBoxHolderIndex];
    wordsToFindDivArray.forEach((wordDiv, index) => {
      wordDiv.textContent = wordsArr[index];
    });
  
    let unplacedWords = [...letterArr]; // Create a copy of letterArr
  
    while (unplacedWords.length > 0) { // Continue until all words are placed
      const word = unplacedWords.pop(); // Get the last word from unplacedWords
      let wordIndex = 0;
      let placed = false;
      let attempts = 0; // Add a counter for attempts
  
      while (!placed && attempts < 100) { // Limit the attempts
        let boxIndex = Math.floor(Math.random() * 15);
        let currentDirection = currentBoxHolder[boxIndex];
  
        if (boxIndex + word.length <= currentDirection.length) {
          let intersect = false;
  
          for (let i = boxIndex; i < boxIndex + word.length; i++) {
            if (currentDirection[i].textContent !== '') {
              intersect = true;
              break;
            }
          }
  
          if (!intersect) {
            for (let i = boxIndex; i < boxIndex + word.length; i++) {
              currentDirection[i].textContent = word[wordIndex];
              wordIndex += 1;
            }
            placed = true;
          }
        }
  
        if (!placed) {
          currentBoxHolderIndex = (currentBoxHolderIndex + 1) % 2; // Toggle between rows and columns
          currentBoxHolder = boxHolders[currentBoxHolderIndex];
          let emptyBoxFound = false;
  
          for (let i = 0; i < currentBoxHolder.length; i++) {
            if (emptyBoxFound) {
              break;
            }
  
            let direction = currentBoxHolder[i];
            if (word.length <= direction.length && !direction.some(box => box.textContent !== '')) {
              for (let j = 0; j < word.length; j++) {
                direction[j].textContent = word[j];
              }
              placed = true;
              emptyBoxFound = true;
            }
          }
        }
  
        attempts += 1; // Increment attempts
      }
    }
  }
  

 addDictionaryWordLettersToDiv()




 function addRandomLettersToEmptyDivs(){
    let wordsArr = dictionaryWords.map(word => word.value);
    let allLettersArray = [];

    // Iterate through each word in wordsArr
    wordsArr.forEach(word => {
      // Iterate through each letter in the word
      for (let i = 0; i < word.length; i++) {
        allLettersArray.push(word[i]); // Add the letter to the allLettersArray
      }
    });
console.log(allLettersArray)

for (let emptyBox of boxesArray) {
    if (emptyBox.textContent === '') {
      let randomIndex = Math.floor(Math.random() * allLettersArray.length);
      emptyBox.textContent = allLettersArray[randomIndex];
    }
  }

 }
addRandomLettersToEmptyDivs()



function trackClickedBox(box){

console.log(box.textContent)
if(box.className === 'box'){
    alert('box found')
}
}

document.addEventListener('click',(box)=>{

trackClickedBox(box.target)
})