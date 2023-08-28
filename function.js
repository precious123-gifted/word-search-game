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

let currentWordToCompare = []
let currentIndexToCompare = []
let currentIndexesToCompare = []

let foundWordsArray = []

 async function trackClickedBox(box){ 


if(box.className === 'box'){
    box.classList.remove('box')
    box.classList.add('clicked-style')
    currentWordToCompare.push(box.textContent)
    currentIndexToCompare.push(box.id)
    currentIndexesToCompare.push(box.id)
    console.log(currentWordToCompare)
    console.log(currentIndexToCompare)
    let word = currentWordToCompare.join('')
    console.log('word to compare',word)
  
    let wordFound = await dictionaryWords.find(wordS => wordS.key === word)
    
console.log( wordFound? `wordfound status is:,${wordFound}` : null)
    if(wordFound){alert('found a word'); foundWordsArray.push(wordFound.key);}  
  console.log('found words',foundWordsArray)

  if(wordFound){currentIndexToCompare =[];currentIndexesToCompare = [];currentWordToCompare = []
  
    boxesArray.forEach(box =>{
  
    box.style.pointerEvents = 'all'
  })} 


  if(foundWordsArray.length === wordsToFindDivArray.length){alert('game completed')}


  wordsToFindDivArray.forEach((wordDiv, index) => {
   if(wordDiv.textContent === wordFound?.key){ wordDiv.style.color = 'red'  }
  });


    let sub = currentIndexesToCompare.length>1? currentIndexesToCompare[0]-currentIndexesToCompare[1]:null
    console.log('sub',sub)
    let currentClickingDirection = sub === -1?rows : sub === -15?columns:null
//i will need to get the index of all the boxes being clicked,if each of the box index subtracted by the other gives you 
//-1 or -15 then the selection is valid else its invalid so the comparison loop would not run to check for 
//the word in the dictionary word array
//write a logic to check if current index length is greater than 1 then check if index 0 and 1 
//if subracted will gives you -1 or 15 remove index 0 from the array and check if that word exists
//else if it does not give you -1 or -15 alert (you can not select words from random boxes)


let check_currentIndexToCompare_array_and_return_a_warning_message_if_index0_subracted_from_index_one_is_not_equals_to_negative1_or_negative15_else_if_equals_to_it_remove_index0_from_array_and_check_if_the_word_exists_in_dictionaryWordArray

if(currentIndexToCompare.length>1 &&  sub !== -1 && sub !== -15){alert('yeba you must click either vertically or horizontally')}

if (currentClickingDirection === rows) {



  //run check for word
//check if word exists in found word array
//if it doesnt exist in found words array only then will you check dictionary words
//if word exists strike the word and add it to found words array hash tree
//empty current word array and current index array
//else if the word doesnt exist remove current index array index 0



//check if sub is in row or column,if its in row find the row index in rows array likewise for columns
//set current clicked direction to row or column
//if the last letter index added is not found in current clicked direction index array
//send warning message
currentIndexToCompare.shift()
console.log('popped',currentIndexToCompare)
console.log('popped',currentIndexesToCompare)


  let currentRow = Math.floor(currentIndexToCompare[0] / rows.length);
  let currentIndexInRow = currentIndexToCompare[0] % rows.length;
 console.log(sub)
  

  console.log('Current Row:',currentClickingDirection[currentRow]);
  console.log('Current index id:',boxesArray[currentIndexToCompare].id);
  let currentRowing =  currentClickingDirection[currentRow]
  console.log('Current Row box:',currentClickingDirection[currentRow][currentIndexInRow]);
  console.log('Current Row box id:',currentClickingDirection[currentRow][currentIndexInRow].id);
  let existsInRow = currentRowing.some( box => box.id === boxesArray[currentIndexToCompare].id)

  // alert(boxesArray[currentIndexToCompare].id === currentClickingDirection[currentRow][currentIndexInRow].id ? 'comparison successful' : 'comparison wrong')
  
 //check if sub is null
//  alert(sub === -1?'direction is row':sub)

 console.log(existsInRow)
  console.log('exist in row status',existsInRow)
  console.log('Current Index in Row:', currentIndexInRow);

 
  let currentRowArray = rows[currentRow];
  let currentIndexToCompareValue = parseInt(currentIndexToCompare[0]);

  //check if the current index to comapare is foun in the row and alert a message
  console.log('current row',currentRow)
  
  boxesArray.forEach(box =>{

    box.style.pointerEvents = 'none'
  })
  currentClickingDirection[currentRow].forEach(box =>{

    box.style.pointerEvents = 'all'
  })

  if(currentIndexesToCompare[currentIndexesToCompare.length-2]-currentIndexToCompare[0] !== -1){


     alert('wahala don they o,you clicked on a different box from your current row')
  }
 

 



} else if (currentClickingDirection === columns) {

  currentIndexToCompare.shift()
  console.log('popped',currentIndexToCompare)
  console.log('popped',currentIndexesToCompare)
  
  
 
   let currentColumn = currentIndexToCompare[0] % columns.length;
  let currentIndexInColumn = Math.floor(currentIndexToCompare[0] / columns.length);
  console.log('Current Column:', currentIndexToCompare[0] % columns.length);
  console.log('Current Index in Column:', currentIndexInColumn);
  console.log('currentclikcing direction',currentClickingDirection)
  
    console.log('Current Column:',currentColumn);
    console.log('Current index id:',boxesArray[currentIndexToCompare].id);

    console.log('currentclikcing direction column',currentClickingDirection[currentColumn])
    let currentColumning = currentColumn
    // console.log('Current Row box:',currentClickingDirection[currentColumn][currentIndexInColumn]);
    // console.log('Current Row box id:',currentClickingDirection[currentColumn][currentIndexInColumn].id);
    let existsInColumn = currentClickingDirection[currentColumn].some( box => box.id === boxesArray[currentIndexToCompare].id)
   
  //   alert(boxesArray[currentIndexToCompare].id === currentClickingDirection[currentColumn][currentIndexInColumn].id ? 'comparison successful' : 'comparison wrong')
    
  //  alert(sub === -15?'direction is col':sub)
  
   console.log(existsInColumn)
    console.log('exist in col status',existsInColumn)
    console.log('Current Index in Col:', currentIndexInColumn);
  
   
    let currentRowArray = rows[currentColumn];
    let currentIndexToCompareValue = parseInt(currentIndexToCompare[0]);
  
    console.log('current Col',currentColumn)
    
    boxesArray.forEach(box =>{

      box.style.pointerEvents = 'none'
    })
    currentClickingDirection[currentColumn].forEach(box =>{

      box.style.pointerEvents = 'all'
    })
  
    if(currentIndexesToCompare[currentIndexesToCompare.length-2]-currentIndexToCompare[0] !== -15){
  
  
       alert('wahala don they o,you clicked on a different box from your current column')
    }
   

  




}







}
}

document.addEventListener('click',(box)=>{

trackClickedBox(box.target)
})