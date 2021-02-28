import styled from 'styled-components';

export const CardContainer=styled.div`
width:300px;
display:flex;
flex-direction:column;
border-radius:5px;
box-shadow:0 3px 2px rgba(0,0,0,0,.3);
background-image:linear-gradient(to bottom right,#01bf71,white);
justify-content:space-around;
padding:10px 0px;
margin-right:50px;


@media screen and (max-width:750px){
width:250px;
margin-right:0px;
}
@media screen and (max-width:320px){
    width:200px;
    margin-right:0px;
    }
`

export const CardTop=styled.div`
display: flex;
position:relative;
justify-content:center;
align-items:center;
padding:10px 20px;
flex-direction:column;


`
// export const Title=styled.h2`
// color:#000;
// font-family:'Ubuntu','sans-serif';
// font-size:28px;
// font-weight:600;
// @media screen and (max-width:320px){
//     font-size:25px;
//    }
// `
// export const BrandName=styled.h3`
// color:#000;
// font-size:16px;
// font-weight:700;
// letter-spacing:1.4px;
// text-transform:uppercase;
// margin-left:5px;

// `
// export const Brand=styled.div`
// display:flex;
// color:#123524;
// font-size:16px;
// font-weight:700;
// letter-spacing:2px;
// text-transform:uppercase;
// font-family:'Ubuntu','sans-serif';


// margin-top:10px;
// `

export const CardMiddle=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
`
export const CardInfotitle=styled.h4`
color:#000;
font-size:20px;
font-weight:500;
text-transform:uppercase;
font-family:'Ubuntu','sans-serif';

margin-bottom:20px;

@media screen and (max-width:320px){
    font-size:20px;
    }
`

export const CardInfo=styled.p`
color:#123524;
font-size:18px;
font-weight:300;
font-family:'Ubuntu','sans-serif';
@media screen and (max-width:320px){
    font-size:16px;
    padding:10px 20px;
    }
`

export const CardBottom=styled.div`
display:flex;
padding:10px 20px;
justify-content:space-around;
align-items:center;
@media screen and (max-width:320px){
    flex-direction:column;
    }
`
export const CardText=styled.p`
color:#000;
font-size:1.3rem;
font-family:'Ubuntu','sans-serif';
` 

export const ImgCard=styled.img`
height:15rem;
width:15rem;
mix-blend-mode: darken;
}

`
export const RatingScore = styled.h4`
color:black;
font-size:1rem;
`

export const Hr=styled.hr`
border-top:1px solid #fff;
width:70%;
margin-top:20px;
margin-bottom:10px;
`
export const Input = styled.input`

`