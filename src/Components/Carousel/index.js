import React from "react"
import Carousel, { NextButton } from "nuka-carousel"
import styled from "styled-components"
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"
import ProductCard from "../ProductCard"
import "./style.css"
const CarouselContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`
const info = {
    slidesToShow: 3,
    keyCodeConfig: true,
    autoplay: false,
    autoplayInterval: 3000,
    dragging: true
  };
export default function CarouselComponent(){
    return(
        <CarouselContainer>
            <Carousel
                {...info}
                defaultControlsConfig={{
                    nextButtonText: <FaArrowRight />,
                    prevButtonText: <FaArrowLeft />,
                    containerClassName: "slideStyle"
                }}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
               
            </Carousel>
        </CarouselContainer>
       
    )
}