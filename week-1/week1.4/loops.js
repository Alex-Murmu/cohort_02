// Loops

/*
What loops are ?
How loops work ?
why do you need them ?
can survive wihtout loops ?
let look at the problem let see ::::::::>>>
*/

// ****problem*** Calculate sum from 0 to 50;


let results =1+2+3+4+5+6+7+8+9+10+           // This
        11+12+13+14+15+16+17+18+19+20+  //  is
        21+22+23+24+25+26+27+28+29+30+   //  The 
        31+32+33+34+35+36+37+38+39+40+   //  Dumbest 
        41+42+43+44+45+46+47+48+49+50;   //  way to calculate the sum from 0 to 50;
console.log(results)
// this is very verbose and dumb if i cahnge the number from 50 to 500 i have to write the loot of number between 50 to 500
// and this will take lots of time to achive this (ans)
// as a developer we don't have that much time to write all this  
// this is Where loop came into the picture * when you Know you have to write some repeated logic over some values
//
  
// right way to achive this answer is to use for loop

let ans = 0;
for(let i=0;i<=50;i++){
    ans=ans+i;
}

console.log(ans)


