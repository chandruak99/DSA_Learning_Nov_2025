


const str="geeksgeeksfor";
function findSubString(str) {
        // code here
        
        
        let countCheck=new Set();
        
        for(let i=0;i<str.length;i++)
        {
            countCheck.add(str[i]);
        }
        
        let count=countCheck.size;
        
        let map=new Map();
        
        
        let low=0;
        let minLength=Infinity;
        
        for(let i=0;i<str.length;i++)
        {
           map.set(str[i],(map.get(str[i])||0)+1);
           
            i
           
        }
        
        return minLength;
        
       
    }

console.log(findSubString(str))