const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

 //con index
function removeDuplicates(list) {
    return list.filter((item, index) => list.indexOf(item) === index);
}


//con Set
function removeDuplicatesSet(list) {
    return [...new Set(list)];
}

console.log(removeDuplicates(duplicates))
console.log(removeDuplicatesSet(duplicates))