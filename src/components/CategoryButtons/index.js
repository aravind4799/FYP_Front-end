import React from 'react';
import './CategoryButton.css';
import {Link} from 'react-router-dom';
const CategoryButtons = ({title,logo,path}) => {
    return(
            <Link to={path}  className={'btn'+' '+'btn-green'} >
            
                <span className='logo'>{logo}</span>
                <span className='title'>{title}</span>
            
            </Link>
        
    );
}
export default CategoryButtons;