import styled from 'styled-components'

export const Form = styled.form`
position:fixed;
right:200px;
display:flex;
flex-flow:row wrap;
margin:0 auto;
margin-top:10%;
justify-content:flex-end;
width:70%;
padding:1rem;
background:whitesmoke;
border-radius:10px;
box-shadow:100px 100px 1000px  rgba(100,100,100,.4),
-100px -100px 1000px  rgba(100,100,100,.4);


`
export const FormHeader = styled.h1`
    padding:1rem;
    text-align:center;
    width:100%;
    color:#34b6e1;
`
export const Input = styled.input`
border:none;
border-radius:5px;
padding:1rem;
font-size:1rem;
color:slategrey;
margin:5px;
width:100%;
`

export const Checkbox = styled.input`
    align-self:center;
`
export const Label = styled.label`
display:flex;
width:100%;
p{
    width:10%;
}
`
export const CloseButton = styled.i`
    color:lightgrey;
    text-align:right;
    font-size:1rem;
    padding:10px;
    &:hover{
        color:grey;
    }
`
export const Button = styled.button`
background:#34b6e1;
margin:1rem;
box-shadow: 4px 4px 4px 0 rgba(22,22,22,.2);
border-radius:5px;
border:none;
font-size:1rem;
padding:10px;
color:white;
width:20%;
&:hover{
    cursor:pointer;
    background:#34b6e1;
}
`

export const Card = styled.div`
margin:1rem;
display:flex;
flex-flow:row wrap;
width:80%;
background:white;
justify-content:flex-end;
.answer.closed{
    display:none;
}
`
export const Chatter = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:flex-end;
    width:4%;
    i{
        margin:5px;
        background:whitesmoke;
        padding:1rem;
        color:lightgrey;

    }
    i.fa-thumbs-up:hover{
        color:green;
    }
    i.fa-thumbs-down:hover{
        color:red;
    }
    i.fa-thumbs-up.active{
        color:green;
    }
    i.fa-thumbs-down.active{
        color:red;
    }
`
export const CardHeader = styled.h1`
    width:90%;
    font-size:1.3rem;
`
export const CardButton = styled.button`
    background:#34b6e1;
    border:none;
    color:white;
    padding:1rem;
    font-size:1rem;
`
export const Answer = styled.p`
    border-top:1px dashed grey;
    width:100%;
    padding:1rem;
`
