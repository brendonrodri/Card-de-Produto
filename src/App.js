import React, {useState, useRef} from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import CarouselComponent from "./Components/Carousel/index"
import ProductCard from "./Components/ProductCard"
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Main = styled.main`
  display: flex;
  background: blueviolet;
  justify-content: center;
`
export default function App (){
  return(
    <Main>
      <GlobalStyle />
      {ProductCard()}
    </Main>
  )
}