// let a = 10;
// let arr = [34,34,45,6565,7676,7]
// let student = ['Raju',"Rastogi"];
let stu = {
    name: "Nidhi",
    age: 15,
    rollNo: 32,
};
// console.log(stu.s);
stu.s='patliputra';
// console.log(stu);
// rollNo               This is camel case  camelCase

// const product = {
//     name: 'Laptop',
//     price: 4000,
//     colorss: ['black','white','red','blue'],
// }
// console.log(product.colorss[1]);


// ---- Array of Objects ----
// const orders = [{},{},{}];
// a = [1,2,3]
const orders = [
    {id: 123,product:"Laptop",price:400},
    {id: 12,product:"Mobile",price:400},
    {id: 13,product:"sim",price:400}
];

var sum = 0;
// orders.forEach((ele)=>{sum = sum+ele.price;})
var su = orders.reduce( (sum,ele)=>{return sum+=ele});
console.log(su);

console.log(sum);
    console.log(orders[1].product);


    // --- DESTRUCTURING ---
const { age , s, sname} = stu;
console.log( age , s , sname);

        // --- STRUCTURING ---
    const brand = 'Samsung';
    const price = 400;
    const model = 'Note 9';
    const rating = 5.6;

    const mobile = { brand , price, model ,rating};
    console.log(mobile);


    console.log(Object.keys(mobile));
    console.log(Object.values(mobile));
    console.log(Object.entries(mobile));

    let prices = orders.map( ord=> ord.price);
    console.log(prices);
    const sumr = prices.reduce( (p1,p2)=>{return p1+p2});
    console.log(sumr);


