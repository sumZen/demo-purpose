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