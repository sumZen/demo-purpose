import {sum} from './math.js';
console.log("Hi My Javascript journey has started.");

async function delayPrint  () {
return 'Hi how are you';
};

delayPrint().then((data)=>{
    console.log(data);
})
.catch((err)=>{
    if (err) throw err;
});

const sumAns = sum(10,20);
console.log("Sum of 10 and 20 is " + sumAns);