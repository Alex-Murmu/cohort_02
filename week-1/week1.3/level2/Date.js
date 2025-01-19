const currentDate = new Date();
console.log(currentDate);

const day = currentDate.getDate();
const Month = currentDate.getMonth();
const year = currentDate.getFullYear();
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();
const second = currentDate.getSeconds();
const millisecond = currentDate.getMilliseconds();

console.log(day)
console.log(Month)
console.log(year);
console.log(hour)
console.log(minutes);
console.log(second);
console.log(millisecond);

currentDate.setFullYear(2022);
console.log(currentDate);

const Beforetime = currentDate.getSeconds();
const calsum=()=>{
    let a =0;
    for(let i=0;i<=1000000000;i++){
        a+=i;
    }
};

const beforeDate = new Date();
const beforeTimeinMs = beforeDate.getSeconds();

calsum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getSeconds();
console.log(afterTimeInMs - beforeTimeinMs);


function logs(){
    console.log(new Date().getTime())
}

setInterval(logs,1000) 