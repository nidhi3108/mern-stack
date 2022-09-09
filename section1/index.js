// 1...  {console.log("hello world");
// b="some string";
// console.log(b);
// console.log(typeof b);}


var c=10;
if(c>=6)
{
    console.log("yes");
    g="this should be global";
    let x="this should be local";
    const y="this should be local and constant";
    // y="some other value";
}
else{
    console.log("no");
}
console.log(g);
// console.log(y);
// console.log(x);



// //3.... {var num= 345;
// // if((num%7==0)&&(num%11==0))
// // {
// //     console.log("yes it is divisible");
// // }
// // else{
// //     console.log("no it is not divisible");
// // }
// }



//4.... {var num=99;
// if(num%7==0&&num%11==0){
//     console.log("num is divisible by 7 and 11 both");
// }
// else if( num%7!=0&& num%11!=0){
//      console.log("num is not divisible by 7 and 11 both");
// }
// else if (num%7==0 && num%11!==0 ){
//     console.log("num is divisible by 7 but not divisible  ny 11");
// }
// else{
//     console.log("num is divisible by 11 but not divisible by 7");
// }
// }