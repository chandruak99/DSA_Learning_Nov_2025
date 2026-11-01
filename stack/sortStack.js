

function insertSort(st,x)
{
    if(st.length===0 || st[st.length-1]>=x)
    {
        st.push(x);
        return;
    }

    let top=st.pop();
    insertSort(st,x);
    st.push(top)

}

function sortStack(st)
{
   
     if(st.length===0)
     {
        return;
     }

     let top=st.pop();
     sortStack(st);
     insertSort(st,top);

     return st;



}


const arr=[41,3,32,2,11];

console.log(sortStack(arr));

