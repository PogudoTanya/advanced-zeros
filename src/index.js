module.exports = function getZerosCount(number, base) {
  // your implementation

  // your implementatio
  var ops=1000000000;
  function ans(ops);
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
  cnt_base2+=t/i;
  t/=i;
}
ans=min(ans,cnt_base2/cnt_base1);
  }
}
return ans;
}
