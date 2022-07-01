import React, {useState, useRef} from "react"
import {FaHeart, FaShoppingCart, FaArrowRight, FaArrowLeft} from "react-icons/fa"
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
    button{
        background: none;
        border: none;
    }
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
    const [fav,setFav] =useState(false)
    const [shirt, setShirt] = useState(CamisaPreta)
    const textcolor = useRef()
  return(
    <Card className="fadeIn">  
        <ImgBox>
            <button onClick={()=>{
                setShirt(shirt === CamisaPreta ? CamisaBranca : CamisaPreta)
            }}> <FaArrowLeft/></button>
            <ImgProduct src={shirt} alt="Camisa branca" />
            <button onClick={()=>{
                setShirt(shirt === CamisaBranca ? CamisaPreta : CamisaBranca)
            }}> <FaArrowRight/> </button>
        </ImgBox>
        <DescriptionProduct>
            <h3 ref={textcolor}>
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
                <FaHeart 
                    onClick={()=>{
                        setFav(!fav)}} 
                    style={fav === false ? { color: "#cecece",transition:"all ease .6s"} : {color: "rgba(255, 0, 0, 0.877)", transition:"all ease .6s"} } 
                    className="Icons"/>
                <FaShoppingCart className="Icons"/>
            </div>
        </PurchaseSection>
    </Card>
  );
}