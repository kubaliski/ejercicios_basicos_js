const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
    let longestWord = stringList[0];

    for (const word of stringList) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

//usando Sort
function findLongestWordSort(stringList){
    return [...stringList].sort((a,b) => b.length - a.length)[0];
}
  console.log(findLongestWord(avengers))
  console.log(findLongestWordSort(avengers))