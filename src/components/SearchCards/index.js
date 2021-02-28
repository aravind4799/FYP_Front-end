import React from 'react'
import {AiOutlineAmazon as LinkAmazon} from 'react-icons/ai';

import recom from '../../Images/recom.png';        
import 
{Hr,
CardInfotitle,
CardInfo,
CardContainer,
CardTop,
CardBottom,
CardMiddle,
ImgCard,
RatingScore
} from './SearchCardsElements';

const SearchCards = ({title,price,link,prodid}) => {

    return (
        <>
        <CardContainer>
          <CardTop>
            <ImgCard src={link} alt="product-image"></ImgCard>
          </CardTop>
          

          <CardMiddle>
            <CardInfo>{title.slice(0,50)}</CardInfo>
            <Hr/>
          </CardMiddle>

          <CardBottom>
            <RatingScore>{price}</RatingScore>
          </CardBottom>

        </CardContainer>
      </>
    )
}

export default SearchCards;
