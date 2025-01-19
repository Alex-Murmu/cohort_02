const alecAsyncFuncton2=()=>{
    let p = new Promise((resolve,reject)=>{
        setTimeout(
            resolve("Hi i am from async await ")
            ,5000);
    })
    return p;

}
async function main2() {
    const value = await alecAsyncFuncton2();
    console.log(value)
}
main2();