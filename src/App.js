import React, {useState, useRef} from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
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
`
export default function App (){
  return(
    <Main>
      <GlobalStyle />
      {ProductCard()}
      {ProductCard()}
      {ProductCard()}
      {ProductCard()}
    </Main>
  )
}