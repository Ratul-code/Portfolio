import styled from "styled-components";

export const PortfolioProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  gap: 1.25rem;
  height: 500px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 300ms ease;
  padding:0 0.8rem ;
  cursor: pointer;
  position: relative;
  border-radius: 7px;
  background-color:#000 ;
  z-index:2;
  overflow:hidden ;
  &>h1,
  p{
      text-shadow: 5px 5px 5px #000
  }
  &>h1,
  p,a{
      transform: translateY(300px) ;
      transition: all 300ms ease;
      margin-left:10px ;
  }
  &:hover >h1,
  &:hover >p,
  &:hover >a{
    transform:translateY(-50px) ;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    z-index:-2;
    background-image:${({bg})=>`url(${bg})`};
    background-size:cover;
    background-position:top;
    background-repeat:no-repeat;
    opacity:0.8;

  }

  &::before {
    transition: all 300ms ease;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    z-index: -1;
    opacity: 0;
  }
  &:hover::after {
    transition: all 300ms ease;
    transform: scale(1.1) ;
  }
  &:hover::before {
    display: flex;
    opacity: 1;
    background: rgb(85, 36, 36);
    background: linear-gradient(
      180deg,
      rgb(77, 28, 28) 1%,
      rgba(5, 0, 0, 0.7506873167155426) 81%
    );
  }
`;
