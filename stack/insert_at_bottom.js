function insertAtBottom(st,x)
{
   if(st.length===0)
    {
        st.push(x);
        return;
    }   

    let top=st.pop();
    insertAtBottom(st,x);

    st.push(top);

    return st;
}
const stack=[4,3,2,1,8];
const x=2;

console.log(insertAtBottom(stack,x));
console.log("stack==",stack)