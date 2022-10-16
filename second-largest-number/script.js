
let numbers=[12,32,1012,1000,85,74,2021,2222,5840,6000,6,333,5,96,101,7000,111,128,133,144,254,963]
let sortNumber=numbers.sort((a,b)=>{
    return a-b;
    
});

console.log(sortNumber);

// let maxNumber=Math.max(...sortNumber)
// console.log('Max number',maxNumber)


let indexofSecondMaxNumber=sortNumber.indexOf(Math.max(...sortNumber))-1;
console.log('Index of second largest Number',indexofSecondMaxNumber);
document.write('Index of second largest Number', indexofSecondMaxNumber);


let secondLargestNumber=sortNumber[indexofSecondMaxNumber];
console.log('Second Largest Number',secondLargestNumber); 
document.write('Second Largest Number',  secondLargestNumber);

 
 