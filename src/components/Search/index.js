import React,{useState,useEffect} from 'react';
import {SearchContainer,PopularHeading,Recommend_me,SearchBar} from './SearchElements';
import Carousel from "react-elastic-carousel";
import SearchCards from '../../components/SearchCards/index';
import RatingCards from '../../components/RatingCards/index';
import Chip from "@material-ui/core/Chip";


import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Button} from '../ButtonElement';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

function Search(){

    const [search_data,set_search_data]=useState([])
    const [product_names,set_product_names]=useState([])

    const [recomm_data,set_data]=useState([])
    const [popular_data,set_pop_data]=useState([])

    const [similar_data,set_similar_data]=useState([])
    const [image_data,set_image_data]=useState([])


    const [isClicked,set_clicked]=useState(false)
    const [isProductClicked,set_productclicked]=useState(false)


   const [rating_data,set_rating_data]=useState([])

   const [ratings_from_child,get_ratings]=useState([])

    useEffect(()=>{

        axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/getpopular',
          })
          .then((response)=>{ set_pop_data(response.data)         
            })
          .catch(error=>{console.log(error)});
         
          axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/getsearchimgdata',
          })
          .then((response)=>{set_image_data(response.data)})
          .catch(error=>{console.log(error)});

          axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/getdata',
          })
          .then((response)=>{ 
              set_search_data(response.data)
             
            })
    
          .catch(error=>{console.log(error)});

        // var dummy=[]
    
        // search_data.forEach((val,i)=>{
        //     if(!(val.prod_name in dummy)){
        //         dummy.push(val.prod_name)
        //     }
        // })
        // set_product_names(dummy)

          
    },[])

    const get_ratings_data = (val) =>{
      get_ratings(val)
    }

    const Clicked = () =>{
        console.log("clicked")

        set_clicked((prev_val)=>(!prev_val))

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
        }

        axios({
            
            method: 'post',
            url: 'http://127.0.0.1:5000/getrecommendations',
            data: {
              "all_products" : ratings_from_child
            }
              
                // {"all_products": {

                //     "1400532655": {
                //         "prodId": "1400532655",
                //         "rating": 5
                //     },
                //     "B001NJ0D0Y": {
                //         "prodId": "B001NJ0D0Y",
                //         "rating": 3
                //     }
                // }
                // }
          })
          .then((response)=>{ set_data(response.data)         
            })
          .catch(error=>{console.log(error)});
          console.log(recomm_data)
    }

    const productClicked = (e) =>{
        set_productclicked((prev_val)=>(!prev_val))
        console.log(e.currentTarget.getAttribute('prodid'))

        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/getsimilarimage',
            data: 
                {
                    "prod_ID":e.currentTarget.getAttribute('prodid')
                }
          })
          .then((response)=>{ set_similar_data(response.data)         
            })
          .catch(error=>{console.log(error)});
    }

    const recommendation = (product_list) => {
        console.log(product_list)
        var IMG=[]
        var RAT=[]
        var ID=[]
        var PROD=[]
        var IMG_NAME_ID=[]

        // var dummy=[]
    
        // search_data.forEach((val,i)=>{
        //     if((val.prod_name in dummy===false)){
        //         dummy.push(val.prod_name)
        //     }
        // })
        // set_product_names(dummy)
        //to get product_id and image url of the respective product_name in the array 
        //and get the ratings of it
        for(var i=0;i<product_list.length;i++){
            for(var j=0;j<search_data.length;j++){
                if(product_list[i]===search_data[j].prod_name ){
                    IMG.push(search_data[j].imgurl)
                    ID.push(search_data[j].prod_ID)
                    PROD.push(product_list[i])
                    break
                }
            }
        }
        
        IMG.forEach((val,i)=>{
            IMG_NAME_ID.push({
                imgurl:val,
                prodname:product_list[i],
                prodid:ID[i]
            })
        })
        
        set_rating_data(IMG_NAME_ID)
    }

 
   
    return(
        <>
        {console.log(product_names)}
        <SearchContainer id='search'>

        <PopularHeading> Popular products </PopularHeading>

       

        <Carousel breakPoints={breakPoints}>
        {popular_data.map((data,index)=>{
                       return(
                        <div onClick={(e)=>productClicked(e)} prodid={data.prod_ID}>
                        <SearchCards 
                        id={index}
                        prodid={data.prod_ID}
                        title={data.prod_name}
                        link={data.imgurl}
                        price={data.ratings_sum}
                        />
                        </div>
                       );
                   })}
        </Carousel>

        <SearchBar>

        
        <Autocomplete
        onChange={(event,value)=>recommendation(value)}
        multiple
        id="tags-filled"
        options={search_data.map((option) => option.prod_name)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="Search Products"
            placeholder="search"
          />
        )}
      />
      </SearchBar>

      {rating_data.length ? <Carousel breakPoints={breakPoints}>
        {rating_data.map((data,index)=>{
                       return(
                        <div 
                        prodid={data.prodid}
                        >
                        <RatingCards 
                        ratings={get_ratings_data}
                        id={index}
                        title={data.prodname}
                        link={data.imgurl}
                        prod_id={data.prodid}
                        />
                        </div>
                       );
                   })}
        </Carousel>:null}

      

        <Recommend_me onClick={Clicked}> You may also like </Recommend_me>

        {isClicked && 
        <Carousel breakPoints={breakPoints}>
        {recomm_data.map((data,index)=>{
                       return(
                        <div onClick={(e)=>productClicked(e)} prodid={data.prod_ID}>
                        <SearchCards 
                        id={index}
                        prodid={data.prodid}
                        title={data.prodname}
                        link={data.imgurl}
                        price={data.rating}
                        onClick={productClicked}
                        />
                        </div>
                       );
                   })}
        </Carousel>}


        <PopularHeading> Similar Image based recommendation </PopularHeading>

        <Carousel breakPoints={breakPoints}>
        {image_data.slice(0,11).map((data,index)=>{
                       return(
                        <div onClick={(e)=>productClicked(e)} prodid={data.prod_ID}>
                        <SearchCards 
                        id={index}
                        prodid={data.prod_ID}
                        title={data.prodname}
                        link={data.imgurl}
                        price={data.ratings_sum}
                        />
                        </div>
                       );
                   })}
        </Carousel>

        

        {isProductClicked && 
        <>
         <PopularHeading> Similar products </PopularHeading>
        <Carousel breakPoints={breakPoints}>
        {similar_data.map((data,index)=>{
                       return(
                        <SearchCards 
                        id={index}
                        prodid={data.prodid}
                        title={data.prodname}
                        link={data.imgurl}
                        price={data.scores}
                        />
                       
                       );
                   })}
        </Carousel></>}

        {console.log(ratings_from_child)}

        
        </SearchContainer>
        </> 
    );           
}

export default Search;
