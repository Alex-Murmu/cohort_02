/*
the for..in loop iterate over the enumerable properties (keys) of an Object
**/

const object ={
    name:"Anuraj",
    age:22,
    address:"Dumka",
    state:"Jharkhand",
    pinCode:814158
};

// iterate over object  using for in loop
for(let i in object){
    console.log(i);  ///to gets key
    console.log(object[i]); // to get values
}
const keys = Object.keys(object);   // to get array of keys
console.log(keys);

// iterate over object by Object.keys method
Object.keys(object).forEach((key)=>{
    console.log(object[key])            // by Object.key() we are getting array of keys and 
                                        //  and then using foreach we are iterate over array of keys 
                                        // then we passing keys in function and then that fns find value in object by passing key object[key];
});

/// to get array of boject value by Object.value(obj);
Object.values(object).forEach((value)=>{
    console.log(value ," 1");
});

// object.entries 

const profile = {
    name:"Sagar Oraon",
    age:26,
    address:"Ranchi",
    role:"admin",
    gmail:"sagarOraon34.@gmai.com"
};
Object.entries(profile).forEach(([key, value])=>{
    console.log(`${key} = ${value}`)
})

//using filter to filterOut the item that are above 40=
const item = {
    apple:50,
    manog:40,
    orange:20,
    guava:30,
    banana:50
};
const expensiveItem = Object.entries(item).filter(([key,value])=>{
    if(value>=40){
        return item
    }
});
console.log(expensiveItem);