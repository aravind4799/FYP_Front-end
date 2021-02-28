import styled from 'styled-components';

export const ServicesContainer = styled.div`
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:white;

@media screen and (max-width:760px){
    height:900px;
}
`

export const ServicesWrapper = styled.div`
max-width:1008px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;

@media screen and (max-width:1008px){
    grid-template-columns:1fr 1fr;
}

@media screen and (max-width:760px){
    grid-template-columns:1fr;
    padding:0 28px;
}
`

export const ServicesCard=styled.div`
background:white;
border-style:solid;
border-color:green;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rbga(0,0,0,.2);
transition:all .2s ease-in-out;
&:hover{
    transform:scale(1.03);
    transition: all .2s ease-in-out;
    cursor:pointer;
}
`
export const ServicesIcon=styled.img`
height:160px;
width:160px;
margin-bottom:10px;
`

export const ServicesH1=styled.h1`
font-size:2.5rem;
color:black;
margin-bottom:64px;

@media screen and (max-width:480px){
    font-size:2rem;
}
`
export const ServicesH2=styled.h2`
font-size:1rem;
margin-bottom:10px;

`

export const ServicesP=styled.p`
font-size:1rem;
text-align:center;

`

