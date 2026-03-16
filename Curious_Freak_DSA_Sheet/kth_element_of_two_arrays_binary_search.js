function kthElement(arr1,arr2,k)
{
        let n=arr1.length;
        let m=arr2.length;

        if(n>m) return kthElement(arr2,arr1,k);

        let low=Math.max(0,k-m);
        let high=Math.min(k,n);

        while(low<=high)
        {
            let cut1=Math.floor((low+high)/2);
            let cut2=k-cut1;

            let l1=cut1===0 ? -Infinity :arr1[cut1-1];
            let l2=cut2===0 ? -Infinity:arr2[cut2-1];
            let r1=cut1===n ? Infinity:arr1[cut1];
            let r2=cut2===m ? Infinity:arr2[cut2];


            if(l1<=r2 && l2<=r1)
            {
                return Math.max(l1,l2);
            }
            else if(l1>r2)
            {
            high=cut1-1;
            }
            else {
                low=cut1+1
            }

        }
        return -1;

}

console.log(kthElement([2,3,6,7,9],[1,4,8,10],5))