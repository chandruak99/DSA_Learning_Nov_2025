

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

function reverseString(st)
{
    if(st.length===0)
    {
        return;
    }

    let top=st.pop();

    reverseString(st);
    insertAtBottom(st,top)

    return st;


}

const stack=[1,2,3,4,5];

console.log(reverseString(stack));