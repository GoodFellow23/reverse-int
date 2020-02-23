module.exports = function reverse (n) {
    let temp=0;
    n= Math.abs(n);

    while (n >= 10) 
    {
        temp=temp*10+n%10;
        n=Math.trunc(n/10);
    }
        temp=temp*10+n;
    return temp;
}
