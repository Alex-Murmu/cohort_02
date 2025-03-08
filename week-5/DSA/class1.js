/*
Queston 1 : sum of all natural number from 1 to n;
*/

function sumOFnatularNuber(num){
    let sum =0;
    for(let i =0;i<=num;i++){
        sum+=i;
    }
    return sum;
}

console.log(sumOFnatularNuber(5));

// second metod

function sumOFnatularNuber2(num){
    return num*(num+1)/2;
}

console.log(sumOFnatularNuber2(5))


// sum of digit 

function sumofDigit(num){
    let sum =0;
    while(num>0){
        sum+=num%10;
        num= Math.floor(num/10);
    }
    return sum;
}

console.log(sumofDigit(54454545))