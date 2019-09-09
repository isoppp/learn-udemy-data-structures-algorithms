/**
 * reference type
 **/
(() => {
  const object1 = { value: 10 }; // memory address is A
  const object2 = object1; // memory address is A
  const object3 = { value: 10 }; // memory address is B

  console.log(object1 === object2); // true
  console.log(object2 === object3); // false

  object1.value = 15;

  console.log(object2.value); // 15
  console.log([] === []); // false
})();

/**
 * context vs scope
 **/
(() => {
  const object4 = {
    a: function() {
      console.log(this);
    },
  };

  function b() {
    console.log(this);
  }

  // object4.a() object4.a
  // b() root object
})();

/**
 * instantiation
 **/
(() => {
  class Player {
    constructor(name, type) {
      console.log('player', this);
      this.name = name;
      this.type = type;
    }
    introduce() {
      console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
  }

  class Wizard extends Player {
    constructor(name, type) {
      super(name, type);
      console.log('wizard', this);
    }
    play() {
      console.log(`WEEEEEE I'm a ${this.type}`);
    }
  }

  const player = new Player('name', 'type'); // output Player from Player constructor
  const wizard1 = new Wizard('Shelly', 'Healer'); // output Wizard from Player constructor
  const wizard2 = new Wizard('Shawn', 'Dark Magic'); // output Wizard from Player constructor
  player.introduce();
  wizard1.play();
  wizard1.introduce();
  wizard2.play();
  wizard2.introduce();
})();
