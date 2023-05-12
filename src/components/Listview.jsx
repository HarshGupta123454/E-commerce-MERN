import React from 'react'
import styled from 'styled-components'
import Formatprice from '../Helper/Formatprice';
import { NavLink } from 'react-router-dom';
import { Buttons } from './Buttons';
const Wrapper=styled.section`
    padding: 5rem 0;
    .container{
        max-width: 120rem;
    }
    .grid{
        gap: 3rem 6rem;
    }
    figure{
        width: auto;
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease-in;
        }
        &:hover::after{
            width: 100%;
        }
        img{
            width: 80%;
            height: 80%;
            transition: all 0.3s linear;
        }
        &:hover img {
            transform: scale(1.1);
    }

    }
    .card{
        border: 0.1rem solid rgb(170 170 170 / 40%);

        .card-data{
            padding: 0 2rem;
        }
        h3 {
           margin: 2rem 0;
           font-weight: 300;
           font-size: 2.4rem;
           text-transform: capitalize;
        }
        .btn{
            margin: 2rem 0;
            color: rgb(98 84 243);
            border: 0.1rem solid rgb(98 84 243);
            background-color: #fff;
            display: flex;
           justify-content: center;
           align-items: center;

           &:hover {
           background-color: rgb(98 84 243);
           color: #fff;
           }
        }

    }
`
export default function Listview({filter_product}) {
    
  return (
    <Wrapper>
        <div className="container grid">
            {filter_product.map((ele)=>{
                const {image,name,price,description,id}=ele;
                return(
                    <div className="card grid grid-two-column">
                        <figure>
                            <img src={image} alt={name} />
                        </figure>
                        <div className="card-data">
                            <h3>{name}</h3>
                            <p>Price : <Formatprice price={price} /></p>
                            <p>{description.slice(0,158)}</p>
                            <NavLink to={`/singleproduct/${id}`}>
                                <Buttons className='btn'>
                                    Read More
                                </Buttons>
                            </NavLink>
                        </div>
                    </div>
                )
            })}
        </div>
    </Wrapper>
  )
}
