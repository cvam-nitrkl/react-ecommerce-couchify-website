import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ stars, reviews }) => {
  //programmatic approach for stars printing
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const starElement =
      stars >= index + 1 ? (
        <BsStarFill />
      ) : stars > index + 0.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )
    return starElement
  })

  return (
    <Wrapper>
      <div className="stars">
        {tempStars.map((item, index) => (
          <span key={index}>{item}</span>
        ))}

        {/* manual approach for stars printing starts */}
        {/* <span>{stars >=1 ? <BsStarFill />: stars > 0.5 ? <BsStarHalf /> : <BsStar /> }</span>
    <span>{stars >=2 ? <BsStarFill />: stars > 1.5 ? <BsStarHalf /> : <BsStar /> }</span>
    <span>{stars >=3 ? <BsStarFill />: stars > 2.5 ? <BsStarHalf /> : <BsStar /> }</span>
    <span>{stars >=4 ? <BsStarFill />: stars > 3.5 ? <BsStarHalf /> : <BsStar /> }</span>
    <span>{stars === 5 ? <BsStarFill />: stars > 4.5 ? <BsStarHalf /> : <BsStar /> }</span> */}
        {/* manual approach for stars printing ends here */}
      </div>
      <p>
        {reviews} customer {reviews > 1 ? 'reviews' : 'review'}
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
