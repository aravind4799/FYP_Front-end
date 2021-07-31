import React from 'react';
import './CategoryStyles.css'
import { FaMobileAlt as MobileIcon } from 'react-icons/fa'
import { FcSportsMode as SportsIcon } from 'react-icons/fc'
import { BiCameraMovie } from 'react-icons/bi'
import { FcElectronics as ElectronicIcon } from 'react-icons/fc';
import CategoryButtons from '../CategoryButtons';
const Category = () => {

  return (
    <div id='search'>
      <h1 className='heading'>What are you looking for?</h1>
      <div className="Main">
        <CategoryButtons
          title='Electronics'
          logo={<ElectronicIcon />}
          path='/electronics'
        />
        <CategoryButtons
          title='Sports'
          logo={<SportsIcon />}
          path='/sports'
        />
        <CategoryButtons
          title='Movies'
          logo={<BiCameraMovie />}
          path='/movie'
        />
        {/* <CategoryButtons
          title='Cellphone'
          logo={<MobileIcon />}
          path='cellphone'
        /> */}
      </div>
    </div>
  )
}
export default Category