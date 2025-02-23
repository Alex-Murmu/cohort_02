function filter(arr, fn) {
    let filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        console.log(`Checking arr[${i}] = ${arr[i]}`);
        if (fn(arr[i], i)) {
            console.log(`✅ Adding ${arr[i]} to filteredArr`);
            filteredArr.push(arr[i]);
        } else {
            console.log(`❌ Skipping ${arr[i]}`);
        }
    }
    
    return filteredArr;
}


const array = [1,20,10,30,50,60,40,];

console.log(filter(array,fn))