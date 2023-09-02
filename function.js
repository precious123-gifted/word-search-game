const gameBox = document.querySelector('.game-box')
const Boxes = document.querySelectorAll('.box')

const boxesArray = Array.from(Boxes)
let set_boxes_id = Boxes.forEach( (box,index) =>{box.id = index}
)

const wordsToFindDiv = document.querySelectorAll('.words')
const wordsToFindDivArray = Array.from(wordsToFindDiv)

const dictionaryWords = [
    { key: "LETUS", value: "LETUS" },
    { key: "JERUSALEM", value: "JERUSALEM" },
    { key: "SNAKE", value: "SNAKE" },
    { key: "BLUE", value: "BLUE" },
    { key: "VALLEY", value: "VALLEY" },
    { key: "SHADOW", value: "SHADOW" },
    { key: "DOCTOR", value: "DOCTOR" },
    { key: "MIGRAINE", value: "MIGRAINE" },
    { key: "KATYDID", value: "KATYDID" },
    { key: "LACEBUG", value: "LACEBUG" },
    { key: "LOVE", value: "LOVE" },
    { key: "HOME", value: "HOME" }
];


const numberOfColumns = 15; 
const rowsArray = [];
const columnsArray = Array.from({ length: numberOfColumns }, () => []);

let add_boxes_to_columns_and_rows_array = boxesArray.forEach((box, index) => {
    const rowIndex = Math.floor(index / numberOfColumns);
    rowsArray[rowIndex] = rowsArray[rowIndex] || [];
    rowsArray[rowIndex].push(box);
    
    const arrayBoxIndex = index % numberOfColumns;
    columnsArray[arrayBoxIndex].push(box);
});
 


function addDictionaryWordsLettersToBox() {
    const wordsArr = dictionaryWords.map(word => word.value);
    const wordsLetterArr = wordsArr.map(word => [...word]);
    const columnsArray_And_RowsArray_Selector = [columnsArray, rowsArray];
    let columnsArray_And_RowsArray_Selector_Index = 0;
    let currentBoxHolder = columnsArray_And_RowsArray_Selector[columnsArray_And_RowsArray_Selector_Index];


   let list_words_to_find_in_the_game = wordsToFindDivArray.forEach((wordDiv, index) => {
      wordDiv.textContent = wordsArr[index];
    });
  
    let unplacedWordsLetters = [...wordsLetterArr];
  
    while (unplacedWordsLetters.length > 0) { 
      const aWordLettersArray = unplacedWordsLetters.pop(); 
      let aWordLettersArrayLetterIndex = 0;
      let placed = false;
      let attempts = 0; 
  
      while (!placed && attempts < 100) { 
        let boxIndex = Math.floor(Math.random() * 15);
        let currentDirection = currentBoxHolder[boxIndex];
  
        if (boxIndex + aWordLettersArray.length <= currentDirection.length) {
          let intersect = false;
  
          for (let i = boxIndex; i < boxIndex + aWordLettersArray.length; i++) {
            if (currentDirection[i].textContent !== '') {
              intersect = true;
              break;
            }
          }
  
          if (!intersect) {
            for (let i = boxIndex; i < boxIndex + aWordLettersArray.length; i++) {
              currentDirection[i].textContent = aWordLettersArray[aWordLettersArrayLetterIndex];
              aWordLettersArrayLetterIndex += 1;
            }
            placed = true;
          }
        }
  
        if (!placed) {
          columnsArray_And_RowsArray_Selector_Index = (columnsArray_And_RowsArray_Selector_Index + 1) % 2;
          currentBoxHolder = columnsArray_And_RowsArray_Selector[columnsArray_And_RowsArray_Selector_Index];
          let emptyBoxFound = false;
  
          for (let i = 0; i < currentBoxHolder.length; i++) {
            if (emptyBoxFound) {
              break;
            }
  
            let direction = currentBoxHolder[i];
            if (aWordLettersArray.length <= direction.length && !direction.some(box => box.textContent !== '')) {
              for (let j = 0; j < aWordLettersArray.length; j++) {
                direction[j].textContent = aWordLettersArray[j];
              }
              placed = true;
              emptyBoxFound = true;
            }
          }
        }
  
        attempts += 1;
      }
    }
  }
  
 addDictionaryWordsLettersToBox()

 function addRandomLettersToEmptyDivs(){
    let wordsArr = dictionaryWords.map(word => word.value);
    let allLettersArray = [];

    
    wordsArr.forEach(word => {
      
      for (let i = 0; i < word.length; i++) {
        allLettersArray.push(word[i]);
      }
    });


for (let emptyBox of boxesArray) {
    if (emptyBox.textContent === '') {
      let randomIndex = Math.floor(Math.random() * allLettersArray.length);
      emptyBox.textContent = allLettersArray[randomIndex];
    }
  }

 }
addRandomLettersToEmptyDivs()



let currentWordToCompareArray = []
let currentIndexToCompare = []
let currentIndexesToCompareArray = []
let foundWordsArray = []

function trackClickedBox(box){ 


if(box.className === 'box'){
    box.classList.remove('box')
    box.classList.add('clicked-style')
    currentWordToCompareArray.push(box.textContent)
    currentIndexToCompare.push(box.id)
    currentIndexesToCompareArray.push(box.id)
  
    let word = currentWordToCompareArray.join('')
   
  
    let wordFound = dictionaryWords.find(Word => Word.key === word)
    
    if(wordFound){alert('found a word'); foundWordsArray.push(wordFound.key);}  

  if(wordFound){currentIndexToCompare =[];currentIndexesToCompareArray = [];currentWordToCompareArray = [];
 
  let allow_pointer_events_for_boxes = setTimeout(()=>{
      boxesArray.forEach(box =>{
     box.style.pointerEvents = 'all'
      }) 
    },2000) 
  } 

 if(foundWordsArray.length === wordsToFindDivArray.length){alert('game completed')}

  let change_the_text_color_of_found_words = wordsToFindDivArray.forEach((wordDiv, index) => {
   if(wordDiv.textContent === wordFound?.key){ wordDiv.style.color = 'red'  }
  });

    let subtraction_of_current_index_to_compare_and_previous_index_to_compare = currentIndexesToCompareArray.length>1? currentIndexesToCompareArray[0]-currentIndexesToCompareArray[1]:null
    let currentClickingDirection = subtraction_of_current_index_to_compare_and_previous_index_to_compare === -1?rowsArray : subtraction_of_current_index_to_compare_and_previous_index_to_compare === -15?columnsArray:null


if(currentIndexToCompare.length>1 &&  subtraction_of_current_index_to_compare_and_previous_index_to_compare !== -1 && subtraction_of_current_index_to_compare_and_previous_index_to_compare !== -15 ){alert('yeba you must click either vertically or horizontally')


const logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle =()=>{
  for (let index = 0; index < currentIndexesToCompareArray.length; index++) {
  
 let boxesToRemoveStyle = boxesArray.find( box => box.id === currentIndexesToCompare[index])
   boxesToRemoveStyle?.classList.remove('clicked-style')
   boxesToRemoveStyle?.classList.add('box') 
 }  
 return Promise.resolve()
 }
 logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle()
 logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle().then(()=>{
   currentIndexesToCompareArray = [];currentIndexToCompare =[];currentWordToCompareArray = [];
   let allow_pointer_events_for_boxes = setTimeout(() => {
     boxesArray.forEach(box =>{
     box.style.pointerEvents = 'all'
   }) 
   }, 1000);
 })
}

if (currentClickingDirection === rowsArray) {

currentIndexToCompare.shift()

  let currentRowIndex = Math.floor(currentIndexToCompare[0] / rowsArray.length);
  let currentIndexInRow = currentIndexToCompare[0] % rowsArray.length;  

  let currentClickingRow =  currentClickingDirection[currentRowIndex]
  
  let existsInRow = currentClickingRow.some( box => box.id === boxesArray[currentIndexToCompare].id)

let timeOutToCheckIfAWordExists = setTimeout(()=>{

if(!wordFound){

const logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle =()=>{
 for (let index = 0; index < currentIndexesToCompareArray.length; index++) {
 
let boxesToRemoveStyle = currentClickingDirection[currentRowIndex].find( box => box.id === currentIndexesToCompareArray[index])
  boxesToRemoveStyle?.classList.remove('clicked-style')
  boxesToRemoveStyle?.classList.add('box')

}  
return Promise.resolve()
}
logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle()
logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle().then(()=>{
  currentIndexesToCompareArray = [];currentIndexToCompare =[];currentWordToCompareArray = [];
  let allow_pointer_events_for_boxes = setTimeout(() => {
    boxesArray.forEach(box =>{
    box.style.pointerEvents = 'all'
  }) 
  }, 1000);
})
}
  },10000)

  
 let dissallow_pointer_events_for_boxes = boxesArray.forEach(box =>{
    box.style.pointerEvents = 'none'
  })
 let allow_pointer_events_for_boxes_in_current_clicking_direction = currentClickingDirection[currentRowIndex].forEach(box =>{
    box.style.pointerEvents = 'all'
  })

  if(currentIndexesToCompareArray[currentIndexesToCompareArray.length-2]-currentIndexToCompare[0] !== -1){
     alert('wahala don they o,you clicked on a different box from your current row')
  }
 
} 

else if (currentClickingDirection === columnsArray) {

  currentIndexToCompare.shift()

  let currentColumnIndex = currentIndexToCompare[0] % columnsArray.length;
  let currentIndexInColumn = Math.floor(currentIndexToCompare[0] / columnsArray.length);

    let timeOutToCheckIfAWordExists = setTimeout(()=>{

      if(!wordFound){      
      const logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle =()=>{
       for (let index = 0; index < currentIndexesToCompareArray.length; index++) {
      let boxesToRemoveStyle = currentClickingDirection[currentColumnIndex].find( box => box.id === currentIndexesToCompareArray[index])
  
        boxesToRemoveStyle?.classList.remove('clicked-style')
        boxesToRemoveStyle?.classList.add('box')

      }  
      return Promise.resolve()
      }
      logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle()
      logicToLoopThroughCurrentClickedBoxesAndRemoveTheClickedStyle().then(()=>{
        currentIndexesToCompareArray = [];currentIndexToCompare =[];currentWordToCompareArray = [] ;
        let allow_pointer_events_for_boxes =  setTimeout(() => {
          boxesArray.forEach(box =>{
          box.style.pointerEvents = 'all'
        }) 
        }, 1000);
      })
      } 
      },10000)
      
   
    
    let dissallow_pointer_events_for_boxes = boxesArray.forEach(box =>{
      box.style.pointerEvents = 'none'
    })
    let allow_pointer_events_for_boxes_in_current_clicking_direction = currentClickingDirection[currentColumnIndex].forEach(box =>{
      box.style.pointerEvents = 'all'
    })
  
    if(currentIndexesToCompareArray[currentIndexesToCompareArray.length-2]-currentIndexToCompare[0] !== -15){
  alert('wahala don they o,you clicked on a different box from your current column')
    }
   
}}}

let render_trackClickedBox_function = document.addEventListener('click',(box)=>{
trackClickedBox(box.target)
})