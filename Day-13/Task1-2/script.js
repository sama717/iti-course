const person = {
    name: 'Sama',
    display: function() {
      console.log(this.name);;
    }
  };

person.display();

const person2 = {
  name: "Farag",
  greet: () => {
      console.log(this.name);
  }
};

person2.greet();



//Task-2

let arr = [10,25,40,30,15];
let find = arr.findIndex(element=> element === 30);

console.log(find);