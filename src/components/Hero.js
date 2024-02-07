import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <span>comfort zone</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          magnam reiciendis ipsam obcaecati vel, maiores minima enim hic, iusto
          ullam molestiae rerum repellat! Odio, provident? Aliquid voluptatum
          minima a atque!
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  h1 {
    display: grid;
    span {
      margin-top: 0.4rem;
    }
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      span {
        margin-top: 0.8rem;
      }
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      object-fit: cover;
      display: block;
      position: relative;
      border-radius: var(--radius);
    }
    .accent-img {
      position: absolute;
      width: 250px;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
