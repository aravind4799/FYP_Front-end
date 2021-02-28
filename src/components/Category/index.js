import React from 'react';
import './CategoryStyles.css'
import {FaMobileAlt as MobileIcon} from 'react-icons/fa'
import {FcSportsMode as SportsIcon} from 'react-icons/fc'
import {FaShopify} from 'react-icons/fa'
import {RiFridgeLine as KitchenIcon} from 'react-icons/ri'
import {ImBooks as BooksIcon} from 'react-icons/im'
import CategoryButtons from '../CategoryButtons';
const Category = () => {

    return(
        <>

        <h1 className='heading'>What are you looking for?</h1>
        
        <div className="Main">

        
        <CategoryButtons
          title='Electronics'
          logo={<MobileIcon/>}
          path='/electronics'
        />
        <CategoryButtons
          title='Sports'
          logo={<SportsIcon/>}
          path='/sports'
        />
        <CategoryButtons
          title='Fashion'
          logo={<FaShopify/>}
          path='/fashion'
        />
        <CategoryButtons
          title='Kitchen'
          logo={<KitchenIcon/>}
          path='kitchen'
        />
        <CategoryButtons
          title='Music and Books'
          logo={<BooksIcon/>}
          path='books'
        />

        </div>
        
        </>
    )
}
export default Category