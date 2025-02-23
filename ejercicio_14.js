const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

function repeatCounter(list) {
    const counter = {};
    list.forEach(word => {
        counter[word] = (counter[word] || 0) + 1;
    });

    return counter;
}

console.log(repeatCounter(words));