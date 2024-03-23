var a=Buffer.from('vaishu');
var b=Buffer.from('ranpise');
var result=Buffer.compare(a,b);
console.log("value returned is"+ result);
if(result<0)
{
    console.log(a+"lower than"+b);
}
else if(result==0)
{
    console.log(a+"is same as"+b);
}
else
{
    console.log(a+"higher than"+b);
}
