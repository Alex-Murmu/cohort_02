// What does synchronous means ?
/* ANS ===> synchronous ==>as name suggest synchronous means sequentailly
  Together one after another , Only one things happend at a time
  Basically means line by line the code will execute */

  /*  example ===== let say you cooking meggie
  ===cooing meggie ====
  first =>  first you trun on the gas and then start boil the water
  second => while water is boiling you are keep looking  on it
  third => then cutting the vegitable ;
  fourth => then Putting Cacheps on it 
  and so on 

  this means you are doing things sequentially means one by one
  like first turnnig on gas then boilign water and then cutting vegitble and then putting cachaps 
*/

function FindSum(n){
  let ans = 0;
  for(let i=0;i<=n;i++){
    ans+=i;
  }

  return ans;
}

function SumTill100(){
  console.log(FindSum(100));
};

setTimeout(() => {
   SumTill100();
}, 1000);

console.log("Hell i am after setTimeOut Function ");
let result =0;
for(let i=0;i<=20000000000;i++){
  result=i++;
}

  console.log(result)


console.log("Here the Answer is s")