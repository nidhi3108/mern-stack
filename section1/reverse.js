var n=876,r,rev=0;
while(n!=0){
    r=n%10;
    rev=rev*10+r;
    n=parseInt(n/10);
}
console.log(rev);