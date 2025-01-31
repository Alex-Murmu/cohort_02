// String handBook

const { indexOf } = require("lodash");

// String :: length, indexof(), lastIndexof(), slice(), substring(), replace(),
// split(), trim(), toUpperCae(), toLowerCase();

function getLength(string){
    console.log(string);
    console.log(string.length);
}


function IndexOfcharter(string,char){
       console.log(string);
       console.log(string.indexOf(char))
}

IndexOfcharter("App",'p');

/// character at what index

function characterAT(string,index){
    console.log(string);
    console.log(string.charAt(index))
}
characterAT("APPLE",4);

// SLICE;  cutting string from where to where
function getSlice(string,start,end){
    console.log(string);
    console.log(string.slice(start,end));
}
getSlice("murmu",1,5);


function getLastindexof(string,char){
    console.log(string);
    console.log(string.lastIndexOf(char))
}

getLastindexof("Appp","p");

function getSustr(string,start,last){
    console.log(string);
    console.log(string.substring(start,last));
}
getSustr("ALEX",0,3);

// replce the word or character with specific char or word

function getReplace(string,target,toreplace){
    console.log(`originale : ${string}  target: ${target}  replacer : ${toreplace}`);
    console.log(string.replace(target,toreplace));
}
getReplace(" He is a boy","He","Alex");


//split(); is used convert and string into an array split(position where to seperate)
function getSplit(string,seperater){
    console.log("Original : "+string);
    console.log( string.split(seperater));
}

getSplit("Apple","")
getSplit("I am alex murmu"," ")

// trim() cut out the extra spaces from the start;
function gettrim(string){
    console.log("origninal :"+string+ "  "+getLength(string));
    console.log(string.trim()   +" "+ getLength(string))
}

gettrim("           FDF     dfdfdf           ");




function makeCapital(string){
    console.log("original : "+string);
    console.log(string.toUpperCase())
}

makeCapital("sdsjdsjdjsjd");;

function makelowwercae(string){
    console.log("original : "+string)
    console.log(string.toLowerCase())
}
makelowwercae("DNJSDJI")
