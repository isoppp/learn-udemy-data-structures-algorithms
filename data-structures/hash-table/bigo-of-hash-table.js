let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhh!');
  },
};

user.age; // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

// Map
// can use any data type as a key
// ordered data
// TODO add characteristic and difference from Object
const map = new Map();

// Set
// TODO add characteristic and difference from Array
const sets = new Set();
