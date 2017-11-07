## soo-logger

### Screw [Object, Object]

I hate trying to debug with the console and only seeing partial data, with the rest falling into [Object] blocks. This is an attempt to fix that.

`soo-logger` turns this:
```bash
{ dog:
   { name: 'kylo',
     breeds: [ [Object], [Object] ],
     siblings: [ [Object] ] } }
```

into this:
```bash
{
  "dog": {
    "name": "kylo",
    "breeds": [
      {
        "breed": "Lab"
      },
      {
        "breed": "Pit Bull"
      }
    ],
    "siblings": [
      {
        "name": "Leia",
        "breeds": [
          {
            "breed": "Border Collie"
          }
        ]
      }
    ]
  }
}
```

### Usage:
```bash
$ yarn add soo-logger
```

```javascript
const soo = require('soo-logger');

const data = {
  dog: {
    name: 'kylo',
    breeds: [
      {
        breed: 'Lab',
      },
      {
        breed: 'Pit Bull',
      },
      {
        breed: 'Doofus',
      },
    ],
  },
};

console.log(data) // => Prints garbage.
soo(data); // => Prints what you would expect.
```