function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 1000);
    });
}

function task4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 4 completed");
            resolve();
        }, 1000);
    });
}

function task5() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 5 completed");
            resolve();
        }, 1000);
    });
}

function task6() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 6 completed");
            resolve();
        }, 1000);
    });
}

// Start promise chain
// task1()
//     .then(task2)
//     .then(task3)
//     .then(task4)
//     .then(task5)
//     .then(task6)
//     .then(() => {
//         console.log("All tasks completed (Promise)");
//     });
/// create async await primise chain

async function main() {
    await task1();
    await task2();
    await task3();
    await task4();
    await task5();
    await task6();
    console.log(" All task are Completed");
}


// start async await promise chain
main();