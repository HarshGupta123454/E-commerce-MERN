import {NavLink, useParams} from 'react-router-dom';
import {useEffect} from "react";
import { useProductContext } from './context/Productcontext';
import styled from "styled-components"
import Formatprice from './Helper/Formatprice';
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Singleimage from './components/Singleimage';
import Stars from './components/Stars';
import Addtocart from './components/Addtocart';
export default function SingleProduct() {
  const API = "https://api.pujakaitem.com/api/products";
  
  const {getSingleProduct,isSingleLoading,singleProduct}=useProductContext()
  const { id } = useParams();
  console.log(isSingleLoading)
  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[]);
  const {name,price,stars,stock,reviews,image,description,company,category}=singleProduct;
  const Wrapper=styled.section`
    .container{
      padding:9rem 10rem;
    }
    .navigation{
      height: 10rem;
      background-color: ${({ theme }) => theme.colors.bg};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 3.2rem;
      padding-left: 1.2rem;
      a {
      font-size: 3.2rem;
      }
    }
    .product_image{
      display: flex;
      align-items: center;
    }
    .product_data{
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      .product-data-price{
        font-weight: bold;
      }
      .product-data-real-price{
        color: ${({theme})=>theme.colors.btn};
      }
      .product-warrenty-data{
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;



        .product-data-warrenty{
          text-align: center;


          .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.2rem;
          padding-top: 0.4rem;
        }
        }
        .product-data-info{
          
        }
      }

    span{
          font-weight: bold;
      }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
  }
  
    }

  `
  return (
    <>
    <Wrapper>
    <div className="navigation">
    <NavLink to="/">
    Home
    </NavLink>/{name}
    </div>
      <div className="container">
        <div className="grid grid-two-column">
          {/* div for product image */}
          <div className="product_image">
          <Singleimage img={image}/>
          </div>
          {/* div for product data */}
          <div className="product_data">
            <h2>{name}</h2>
            <p><Stars stars={stars} review={reviews}/></p>
            <p className='product-data-price'>
              MRP:
              <del>
                <Formatprice price={price + 25000}/>
              </del>
            </p >
            <p className='product-data-price product-data-real-price'>Deal of the day: <Formatprice price={price}/></p>
            <p>{description}</p>
            <div className="product-warrenty-data">
              <div className="product-data-warrenty">
              <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-data-warrenty">
              <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-data-warrenty">
              <TbTruckDelivery className="warranty-icon" />
                <p>Harsh Delivered </p>
              </div>
              <div className="product-data-warrenty">
              <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
            <p>Available : <span> {stock > 0?"Available in Stock":"Not Available in stock"} </span></p>
            <p>
                Brand :<span> {company} </span>
            </p>
            </div>
            <hr />
            {stock>0&&<Addtocart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  )
}
