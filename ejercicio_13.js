const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

function nameFinder(nameList, searchedName) {
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === searchedName) {
            return { found: true, index: i };
        }
    }
    return { found: false, index: -1 };
}

  console.log(nameFinder(names,"Angel"))
  console.log(nameFinder(names,"Peggy"))