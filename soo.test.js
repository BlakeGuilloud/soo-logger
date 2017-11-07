const soo = require('./index');

const object = {
  dog: {
    name: 'kylo',
    breeds: [
      {
        breed: 'Lab',
      },
      {
        breed: 'Pit Bull',
      }
    ],
    siblings: [
      {
        name: 'Leia',
        breeds: [
          {
            breed: 'Border Collie',
          }
        ]
      }
    ]
  }
};

console.log('console.log()')
console.log(object);

console.log('soo()')
soo(object);
