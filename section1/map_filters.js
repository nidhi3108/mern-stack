// 1...   const num =[34,6,23,4,7,2];
// const newsNums= num.map((n)=>{return n**2});
// console.log(newsNums);


//2...   const num =[34,6,23,4,7,2];
// const newsNums= num.map((n)=>{return '₹'+n});
// console.log(newsNums);

//3...create a new ARRAY where if no is even then divide by  2 if odd multiplied by 2
const num=[34,6,23,67,4,7,2];
//  const result=num.map(n=> (n%2===0?n/2:n*2));
//  console.log(result);
//curly bracket lgana h to return bhi jruri h 



 //filter all even and odd numbers
 const filnumseven = num.filter((n)=>{return n%2== 0});
 const filnumsodd = num.filter((n)=>{return n%2 != 0});
 console.log(filnumseven ,filnumsodd);


 //filter num grtear than 100
//  const no=[985,25,52,67,25,774,233];
//  const filnumsg=no.filter((n)=>{return n>100});
//  console.log(filnumsg);


//compare with symbol and string
//  const no=['₹985','₹25','₹52','₹67','₹25','₹774','₹233'];
//  const filnumsg=no.filter((n)=>{
//  return parseInt(n.substring(1))>100
//  });
//  console.log(filnumsg);

 

//  let brands =['asus','lenevo','dell','hp','apple','apple'];
//  let search='asus';
//  const searchres=brands.filter((n) =>{ 
//     if(n==search)
//     return n;
//     });
//     console.log(searchres);