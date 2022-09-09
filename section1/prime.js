// //check whether no is prime or not
// var n=3;
// var count=0;
// for(let i=1;i<=n/2;i++){
//     if(n%i==0){
//         count++;
//     }
// }
// if( count==1)
// {
//     console.log("NO is prime");
// }
// else{
//     console.log("NO is not prime");
// }


// }


//  -- for each fir square --
const arr = [1,23,4,5,6,8,8,9,10];
let arr2 = [];
// for(let i=0; i<arr.length;i++)
// {
//     arr2[i] = arr[i]*arr[i];
// }
// console.log(arr2);

arr.forEach((ele)=>{
    arr2.push(ele*ele);
})
console.log(arr2)

// var a  = arr.map( (ele)=>{
//     return ele*ele;
// } );
// console.log(a);