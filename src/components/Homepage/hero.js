import React from 'react'
import Button from './button'
import Link from '@docusaurus/Link'
import styled from '@emotion/styled'
import Breakout from './Breakout'

const StyledHero = styled.div`
  .heroHeading {
    display: flex;
    flex-flow: column;
    flex-direction: column-reverse;
    * {
      color: rgba(0, 51, 173, 1);
    }
  }
  a {
    text-decoration: none;
  }
  margin-top: -3rem !important;
  .breakout {
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      background: url('img/hero-image.png') no-repeat center center;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 50%;
      background-size: 90%;
      height: 100%;
      width: 900px;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 1200px;
      height: 100%;
      background-size: cover;
      background: url('img/cardanoDots.svg') no-repeat center center;
      background-size: 62%;
    }
    @media (max-width: 959px) {
      padding: 4rem 0 2rem 0;
      &:before {
        content: none;
      }
      &:after {
        top: -40%;
        right: -50%;
        width: 100%;
        z-index: -1;
      }
    }
  }

  .site-hero {
    max-width: 71.25rem;
    margin: 0 auto;
    padding: 9rem 0 9rem 0;
    @media (max-width: 1220px) {
      max-width: 87vw;
    }
    .heading-msg {
      width: 50%;
      text-align: left;
      h1 {
        width: 95%;
        line-height: 1;
        margin-bottom: 2rem;
        font-size: 3.7rem;
      }
      h2 {
        font-size: 2rem;
        margin-bottom: 0.25rem;
      }
      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.4;
        margin-bottom: 2.5rem;
      }
      p.lead {
        font-size: 1.3rem;
      }
    }
    @media (max-width: 959px) {
      padding: 2rem 0 3rem 0;
      max-width: 87vw;
      background-size: 300px;
      .heading-msg {
        width: 100%;
        h1 {
          max-width: 100%;
        }
        p.lead {
          font-size: 1.14rem;
        }
      }
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
  }
`

const Hero = ({ heading, subHeading, lead, text, label1, label2 }) => {
  return (
    <StyledHero>
      <Breakout className="breakout" bgHiLight>
        <div className="site-hero">
          <div className="heading-msg">
            <div className="heroHeading">
              <h1>{heading}</h1>
              <h2>{subHeading}</h2>
            </div>
            <p className="lead">{lead}</p>
            <p>{text}</p>
            <ButtonContainer>
              <Link to="/about-cardano/introduction">
                <Button btn="hero">{label1}</Button>
              </Link>
              <Link to="/developer-resources/welcome">
                <Button btn="hero">{label2}</Button>
              </Link>
            </ButtonContainer>
          </div>
        </div>
      </Breakout>
    </StyledHero>
  )
}

export default Hero
