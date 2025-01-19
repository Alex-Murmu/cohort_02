// older method of creating object of the person and animal things etc
const admi ={
    name:"Alex",
    age:22,
    Dob:'2003-05-25',
    address:"Asanbani",
    city:"Dumka"
};

// if we want to get the value like this admi name is this this admi age is that and etc 
console.log(`the name of admi is ${admi['name']} and his age is :${admi['age']} and he belongs to ${admi['address']}`);
// this is the traditional way of getting value from the object 
/* suppose we have number admi data which we want to print the one by on again again ;
 it supposed to too Zarring so to minimize this type of work in the future we introduce class 
 */

 //

 // Class is a blueprint for creatig an object it defines the properties and method that the Object created

 // Class encapsulates data(properties) and method that operate on the data \\ //using class you can easily create multiple object that share the same structue

 // let see how

 class animal{
    constructor(name,legCount,speak){
        this.name = name;
        this.legCount = legCount;
        this.speak = speak;
    }                     /// this is blueprint

    // here you can define the method that can be called 
    speaks(){
        console.log(this.name +" speaks " +this.speak );
    }
 };
 // let assign some 
 let dog = new animal("Dog",4,"Bhow Bhow"); // we decleared the animal dog
 // let see 

 dog.speaks();
 // as we see in the first that we can create multiple object with same structure so let 
 const cat = new animal("Cat",4,"meow meow");
 const cow = new animal('Cow',4,"roar roar");
 cat.speaks();
 cow.speaks();

 // now we hav better understanding of classes in  js
 //you can also definde more method that can be called when it needed 
class person{
    constructor(name,age,address,mobile,height){
        this.name = name;
        this.age= age;
        this.address = address;
        this.mobile = mobile;
        this.height = height;
    };
    // here are some method that can
    // method can return and log or do some specific task operation
    showme(){
      //  console.log(`The Name of person is : ${this.name} his age is : ${this.age} his address is  : ${this.address} and his mobile and height is :${this.mobile} || ${this.height}`);
      return {
        name:this.name,
        age:this.age,
        address:this.address,
        mobile:this.mobile
      }
    }
};
let Alex = new person("Alex",22,"Dumka",766785977,5.5);
let simon = new person("simon",25,"Dumka",766785977,5.5);
let reshmi = new person("reshmi",30,"Dumka",766785977,5.5);
let Anuraj = new person("Anuraj",22,"Dumka",6526446546,5.5);
let sakatiman = new person("sakatiman",22,"Dumka",766785977,5.5);
let raju = new person("raju",22,"Dumka",766785977,5.5);
let sagar = new person("sagar",22,"Dumka",766785977,5.5);
console.log(Alex.showme())
simon.showme();
reshmi.showme();
Anuraj.showme();
sakatiman.showme();
raju.showme();
sagar.showme();

// let defferent types of method in class 

class man{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    static callme(){  // here the method is static means only can called with the bluerint name only   this can call only with name of blue print
        console.log("Person")
    }

    // normal method
    seeme(){
        console.log(`Name : ${this.name}  age : ${this.age}  address : ${this.address}`)
    }

}
const nelson = new man("Nelson",17,"Asanbani");
man.callme(); // here that  static call example is
