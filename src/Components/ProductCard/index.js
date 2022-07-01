import React, {useState, useRef} from "react"
import {FaHeart, FaShoppingCart} from "react-icons/fa"
import styled from "styled-components"
import CamisaBranca from "../Assets/camisabranca.png"
import "./style.css"
import CamisaPreta from "../Assets/camisapreta.png"
const Card = styled.div`
    width: 17vw;
    height: 50vh;
    margin: 50px auto;
    font-family: 'Roboto', sans-serif;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);
    border-radius: 5px;
`;
const ImgBox = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    background: #f0f0f0;
`;
const ImgProduct = styled.img`
    width: 13vw;
    padding: 13px;
`;
const DescriptionProduct = styled.div`
    width: 100%;
    height: 25%;
    padding: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        font-size: 1em;
        margin: 5px 0;
    }
    p{
        font-size: .9em;
        text-align: center;
        margin: 5px auto;
    }
`;
const PurchaseSection = styled.div`
    width: 100%;
    height: 4vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        display: flex;
        align-items: center;
    }
`;
const Price = styled.h4`
    color: rgba(255, 0, 0, 0.877);
    font-size: .9em;
`
export default function ProductCard (){
  return(
    <Card>  
        <ImgBox>
            <ImgProduct src={CamisaPreta} alt="Camisa branca" />
        </ImgBox>
        <DescriptionProduct>
            <h3>
                CAMISA PRETA SEM ESTAMPA
            </h3>
            <p>
                Camisa preta sem estampa para serigrafia, 100% algodão.
            </p>
        </DescriptionProduct>
        <PurchaseSection>
            <div>
                <Price>R$20,00</Price>
            </div>
            <div>
                <FaHeart className="FavIcon"/>
                <FaShoppingCart className="BuyIcons"/>
            </div>
        </PurchaseSection>
    </Card>
  );
}