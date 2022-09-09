//check perfect no
// var n;
// var count;
// for (n = 1; n <= 100; n++) {
//   count = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//       count = count + i;
//     }
//   }
//   if (count == n) {
//     console.log(n);
//   }
// }

//perfect square
var sqrt;
for(n=1;n<=100;n++){
  // sqrt=n**0.5;
  sqrt = Math.sqrt(n);
if(sqrt==parseInt(n**0.5)){
  console.log(n);
}
}

//fibonacci series
// x=0;
// y=1;
// console.log(x);
// console.log(y);
// for(let i=0;i<=10;i++){
//     let temp=x;
//     x=y;
//     y=temp+y;
//     console.log(y);
// }
