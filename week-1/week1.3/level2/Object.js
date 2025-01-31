// Onjects 

const obj = {
    key1:"Value1",
    key2:"Value2",
    key3:"Value3",
    key4:"Value4"
};

function ObjectMethod(obj){
    console.log("Original Object "+obj);

    let keys = Object.keys(obj);
    console.log("Afer Object.keys() "+keys);

    let values = Object.values(obj);
    console.log(values);

    let entries = Object.entries(obj);
    console.log("After Object.entries() "+entries);

    let mergedObj = Object.assign({},obj,{newkey:"newValue"});
    console.log("After Object.assign() "+mergedObj);

    //second method
    let newObje = {secobjKey1:"Value1",secobjkey2:"Value2"};
    let mergedObj2 = Object.assign({},obj,newObje);
    console.log(mergedObj2);
}

ObjectMethod(obj);