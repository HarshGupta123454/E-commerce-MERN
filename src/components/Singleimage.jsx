import React ,{useState}from 'react'
import styled from 'styled-components'
const Wrapper=styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }

`

export default function Singleimage({img=[]}) {
  const [mainImage, setMainImage] = useState(img[0]);
  const url={...mainImage}
  console.log(url.url)
  return (
   <Wrapper>
    <div className="grid grid-four-column">
      {img.map((ele,index)=>{
        return(
          <figure>
            <img src={ele.url} alt="" onClick={() => setMainImage(ele)} key={index} className="box-image--style" />
          </figure>
        )
      })}
    </div>
    <div className='main-screen'>
      <figure>
        <img src={url.url} alt="" />
      </figure>
    </div>
   </Wrapper>
  )
}
