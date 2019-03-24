module.exports =function getZerosCount(number, base) {
   var ans=1e8;
for(var i=2;i<=base; i++)
{
  if(base%i==0)
  {
var cnt_base1=0;
while(base%i==0)
{
  cnt_base1++;
  base/=i;
}
var cnt_base2=0;
var t=number;
while(t/i>0){
  (cnt_base2+=Math.floor(t/i));
  t/=i;
}
ops=Math.floor(cnt_base2/cnt_base1);
 ans= Math.min(ans,ops);
  }
}
return ans;
}
