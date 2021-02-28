import styled from 'styled-components';

export const SearchContainer=styled.div`
background-color:#fff;
padding-top:40px;
text-align:center;

`;
export const SearchWrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
export const SearchH1=styled.h1`
margin-top:30px`;

export const SearchPic = styled.img`
margin-top:20px;
height:400px;

@media screen and (max-width:720px){
    height:200px;
    margin-top:60px;
}
`;

export const SearchPicWrapper=styled.div`

`;
export const Recommend_me = styled.button`
border-radius:50px;
background-color:black;
padding:.7rem 1.2rem;
color:white;
font-size:1.2rem;
cursor:pointer;
outline:none;
margin:40px 40px;
&:hover{
    color:black;
    background-color:#01BF71;
    transform:scale(1.1);
}
`;
export const PopularHeading = styled.h3`
font-size:2rem;
color:#01BF71;
margin:2rem 2rem;
`
export const SearchBar = styled.div`
margin:2rem 3rem;
border-radius:30px;
`