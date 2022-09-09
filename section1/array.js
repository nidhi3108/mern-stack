//1. arrays containe of multiple data types
//2. arrays are dyanmaic -can change size
//3. arrays suppose  indexing and slicing.
// const nums=[1,2,3,4,9,5,true,'nice']; 
// console.log(nums);

const fruits=['apple','banana','orange','grapes']
console.log(fruits);
//indexing
console.log(fruits[3]);
//this will give undefined
console.log(fruits[10]);
//slicing
// console.log(fruits.slice(1,3));
console.log(fruits.slice(-1,10));

//adding elements to araray
fruits.push('cherry')
console.log(fruits);

//removeing array
//1 pop()- remove last element

console.log(fruits.pop());
console.log(fruits);
//2. splice()-remove from middle element
fruits.splice(1,2);
console.log(fruits);
//for adding in first position
fruits.unshift('qwr');
fruits.splice(1,0,'pappp');
console.log(fruits);


//traversing a array
const numbers =[45,23,67,89,90,76,85];
 for(let i=0;i<numbers.length;i++)
 {
    console.log(numbers[i]);
 }
console.log();
 for(let n of numbers){
    console.log(n);
 }
 console.log('---foreach----');
 numbers.forEach((a,i)=>{console.log(a,i)});



