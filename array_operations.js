numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 1.25, 2.8, 6.5]
numbersEven = []
numbersDouble = []
numbersUnique = []

words = ["chopper", "car","tree", "dog", "elephant"]
wordsCapitalized = []

functions = [getEvenNumbers, doubleValues, capitalizedNames, sortNumbers, removeDuplicateS]


var i = 0
function getEvenNumbers(){
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            numbersEven.push(numbers[i])
        }
    }
    console.log(numbersEven)
}

function doubleValues(){
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 1 !== 0){
            numbersDouble.push(numbers[i])
        }
    }
    console.log(numbersDouble)
}

function capitalizedNames(){
    for (i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        wordsCapitalized.push(words[i])
    }
    console.log(wordsCapitalized)
}

function sortNumbers(){
    console.log(numbers.sort())
}

function removeDuplicateS(){
    for(i = 0; i < numbers.length; i++){
        if (numbersUnique.indexOf(numbers[i]) === -1){
            numbersUnique.push(numbers[i]);
        }
    }
    console.log(numbersUnique)
}