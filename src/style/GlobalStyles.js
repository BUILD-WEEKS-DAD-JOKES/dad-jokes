import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Form = styled.form`

z-index:3;
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

@media (max-width: 500px) {
     width:80%; 
     position:unset;
     right:0;
  }
`

export const Icon = styled.i`
margin:5px;
background:whitesmoke;
padding:1rem;
color:lightgrey;
&.disabled{
    color:red;
}
&:hover{
    cursor:pointer;
}
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
flex-flow:row wrap;
width:100%;
p{
width:10%;
}
@media (max-width: 500px) {
    p{
        width:100%;
    }
 }
`
export const CloseButton = styled.i`
color:lightgrey;
text-align:right;
font-size:1rem;
padding:10px;
&:hover{
    color:grey;
    cursor:pointer;

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


export const Board = styled.div`
display:flex;
flex-flow:row wrap;
width:100%;
`
export const List = styled.div`
width:80%;
@media(max-width:500px){
    width:100%;
}
`
export const Card = styled.div`
margin:1rem;
display:flex;
flex-flow:row wrap;
background:white;
justify-content:flex-end;
border-radius:10px;
color:grey;
padding:10px;
.answer.closed{
    display:none;
}

`
export const Sideboard = styled.div`
display:flex;
flex-flow:column;
width:18%;
height:50vh;
margin:1rem;
background:white;
border-radius:10px;
@media(max-width:500px){
    width:100%;
}
`

export const SideboardTitle = styled.p`
padding:10px;
margin:0 1rem;
border-bottom:1px solid lightgrey;
`

export const SavedList = styled.div`
border-radius:10px;
box-shadow:
    inset 4px 5px 5px rgba(200,200, 200, .4),
    inset -4px -5px 5px rgba(200,200, 200, .4);
width:90%;
margin:1rem auto;
height:100%;
overflow:auto;
p{
    padding:10px;
}

`

export const SavedCard = styled.div`
    display:flex;
    flex-flow:row wrap;
    color:grey;
    border-bottom:1px solid grey;
    p{
        width:100%;
    }
`

export const SaveCardBox = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-between;
width:100%;
padding:10px;
border:1px solid rgba(100,100,100,.2);
`
export const JokeButton = styled(Link)`
z-index:10;
position:fixed;
right:25px;
bottom:25px;
text-decoration:none;
i{
color:white;
font-size:2rem;
box-shadow:4px 4px 4px 0 rgba(22,22,22,.2);
background:#34b6e1;
border-radius:50%;
padding:1.5rem;
margin:0;
}
`

export const OwnedCard = styled.div`
display:flex;
justify-content:space-between;
width:100%;
`
export const CardHeader = styled.h1`
margin:1rem;
width:100%;
font-size:1rem;
`
export const CardButtons = styled.div`
display:flex;
flex-flow:row;
justify-content:flex-end;
width:20%;

`

export const CardButton = styled.button`
background:#34b6e1;
border:none;
color:white;
padding:1rem;
margin:5px;
font-size:1rem;
`
export const Answer = styled.p`
box-shadow:
    inset 4px 5px 5px rgba(200,200, 200, .4),
    inset -4px -5px 5px rgba(200,200, 200, .4);
border-radius:10px;
width:90%;
margin:1rem auto;
padding:1rem;
`


export const LoadingBar = styled.div`
z-index:3;
display:flex;
width:100%;
margin:200px auto 0;
justify-content:center;

`