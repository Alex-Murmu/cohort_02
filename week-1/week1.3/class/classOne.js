class Person{
    constructor(name,age,city){
     this.name = name;
     this.age = age;
     this.city = city;
    }
    introduce(){
        console.log(`Hi, I am ${this.name} from ${this.city}. I am ${this.age} years old.`)
    }
};

const Gagar = new Person("alex",22,"dumka");

Gagar.introduce();

/*
## Task: Create a Person Class
  Concepts Covered: Constructor, instance properties, and instance methods.

🔹 Task:
 Create a Person class with the following:

1. Properties: name, age, and city
2. Method introduce(): Logs "Hi, I am [name] from 3. [city]. I am [age] years old."
4.  Create two instances and call introduce().
*/