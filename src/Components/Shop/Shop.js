import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState("")


    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data.meals);
            console.log(data.meals)
        })
    },[search])

    const searchFood=(e)=>{
        setSearch(e.target.value)
    }


    return (<div className='container'>
        
        <input type="text" onChange={searchFood} placeholder='Food Search' /><FontAwesomeIcon className='icon' icon={faMagnifyingGlass}/>
        <div className='abc'>
            {
                data.map(item=> 
                    <div className='product' key={item.idMeal}>
                        <div className="item">
                            <a href="#">
                            <img src={item.strMealThumb} alt="" />
                            <p>{item.strMeal}</p>
                            </a>
                        </div>
                    </div>
                )
            }
        </div>
        <footer>
            <div className="footer-contant">
                <p>All right served by Md Rasel Kibria</p>
            </div>
        </footer>
        </div>
    );
};

export default Shop;