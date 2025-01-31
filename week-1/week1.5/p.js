


var d = new Promise(function(resolve){
  resolve("foo");
});

function callback(data){
  console.log(data);
};
d.then(callback);

function alexAsncFunction(){
  let p = new Promise(function(resolve,reject){
    resolve("Hi There");
  });
  return p;
};

console.log(alexAsncFunction());
alexAsncFunction().then(function(data){
  console.log(data)
});


// 

function alexAsncFunctions(){
  let p = new Promise(function(resolve){
   setTimeout(resolve,2000)
  })
  return p;
};
alexAsncFunctions().then(function(){
  console.log("hello there")
})  