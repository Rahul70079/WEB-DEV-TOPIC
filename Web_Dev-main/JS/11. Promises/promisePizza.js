// function getCheese() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cheese = "🧀";
//             resolve(cheese);
//         }, 2000);
//     });
// }

// function makeDough(cheese) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dough = cheese + "🫓";
//             // resolve(dough);
//             reject("Bad cheese");
//         }, 2000);
//     });
// }

// function bakePizza(dough) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pizza = dough + "🍕";
//             resolve(pizza);
//         }, 2000);
//     });
// }

// async function orderPizza() {
//     try {
//         const cheese = await getCheese();
//         console.log("here is the cheese", cheese);

//         const dough = await makeDough(cheese);
//         console.log("here is the dough", dough);

//         const pizza = await bakePizza(dough);
//         console.log("here is the pizza", pizza);
//     } catch (err) {
//         console.log("error occured", err);
//     }
//     console.log("Process ended");
// }

// orderPizza();

// // getCheese()
// //     .then((cheese) => {
// //         console.log("here is the cheese", cheese);
// //         return makeDough(cheese);
// //     })
// //     .then((dough) => {
// //         console.log("here is the dough", dough);
// //         return bakePizza(dough);
// //     })
// //     .then((pizza) => {
// //         console.log("here is the pizza", pizza);
// //     })
// //     .catch((data) => {
// //         console.log("error occured", data);
// //     })
// //     .finally(() => {
// //         console.log("Process ended");
// //     });


function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            console.log("here is the cheese", cheese);
            resolve(cheese);
        }, 2000);
    });
}

function makeDough (cheese) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const dough = cheese + "🫓";
            console.log("here is the dough", dough);
            resolve(dough);
        })
    })
}

function bakePizza (dough) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const pizza = dough + "🍕";
            console.log("here is the pizza", pizza);
            resolve(pizza);
        })
    })
}

async function orderPizza () {
    
}