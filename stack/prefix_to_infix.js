function prefixToInfix(arr)
{
  let n=arr.length;
  let i=n-1;
  let stack=[];
  while(i>=0)
  {
     
     if((arr[i]>='A' && arr[i]<='Z') || (arr[i]>='a' && arr[i]<='z'))
     {
        stack.push(arr[i]);
     }
     else
     {
        
        let top1=stack.pop();
        let top2=stack.pop();
        console.log('top1==',top1);
        console.log("top2==",top2)

        let combined="("+ top1 + arr[i]+ top2+ ")";
        stack.push(combined);
     }
     console.log("stack=",stack)
     i--;
  }
  return stack.at(-1);
}


const str="*+PQ-MN";
console.log(prefixToInfix(str))