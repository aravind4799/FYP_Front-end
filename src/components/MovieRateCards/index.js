import React, { useState } from 'react'
import Rating from "@material-ui/lab/Rating";
import {
  Hr,
  CardInfo,
  CardContainer,
  CardTop,
  CardBottom,
  CardMiddle,
  ImgCard,
} from './MovieRateElements';

const rating_array = []


const MovieRateCards = ({ title, price, link, prod_id, ratings }) => {

  const [hover, setHover] = React.useState(1);
  const [toggle, set_toggle] = useState(true);


  return (
    <>
      <CardContainer>

        <CardTop>
          <ImgCard src={link} alt="product-image"></ImgCard>
        </CardTop>


        <CardMiddle>
          <CardInfo>{title.slice(0, 50)}</CardInfo>
          <Hr />
        </CardMiddle>

        <CardBottom>
          {toggle && <div>
            <Rating
              size="large"
              name="hover-feedbacks"
              precision={1}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              onChange={() => {
                //to make sure there are'nt different ratings for the same product for one user


                if (rating_array.length===0) {
                  rating_array.push({
                    prodId: prod_id,
                    rating: hover
                  });
                }
                else {
                  for (var i = 0; i < rating_array.length; i++) {
                    if (rating_array[i].prodId == prod_id) {
                      rating_array[i].rating = hover
                      break
                    }
                    else {
                      rating_array.push({
                        prodId: prod_id,
                        rating: hover
                      });
                    }
                  }

                }



                ratings(rating_array)

                set_toggle(false);
              }}
            />
          </div>}
          {!toggle &&
            <>
              <p> Thanks for feedback!</p>
            </>

          }
        </CardBottom>

      </CardContainer>
      {console.log(rating_array)}

    </>
  )
}

export default MovieRateCards;
