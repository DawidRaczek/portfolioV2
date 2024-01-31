import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;  
`

const Texttitle = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 10px;
    font-size: 55px;
    letter-spacing: 0;
    font-family: Relative;
`;

const Undertitle = styled.p`
    color: white;
    margin-top: 0;
    letter-spacing: 2px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: Relative;
`

const Arrowwrapper = styled.div`
    position: absolute;
    bottom: 30px;
    right: 0;
    width: 44px;
    height: 80px;
    left: 50%;
    transform: translateX(-50%) scaleX(.5) scaleY(.5);
    cursor: pointer;
    z-index: 999;
`
const Arrow = styled.div`
    height: 80px;
    width: 1px;
    text-align: center;
    background-color: #aaa;
    position: absolute;
    transform-origin: 50% 0;
    margin-left: 22px;
    top: 0;
`

const Leftarrow = styled.div`
    position: absolute;
    bottom: 0;
    width: 1px;
    height: 16px;
    transform-origin: 50% 100%;
    background-color: #aaa;
    transform: rotate(45deg);
    margin-left: 22px;
`
const Rightarrow = styled.div`
    position: absolute;
    bottom: 0;
    width: 1px;
    height: 16px;
    transform-origin: 50% 100%;
    background-color: #aaa;
    transform: rotate(-45deg);
    margin-left: 22px;
`

const fronttitle = () => {

return (
    <>
        <Wrapper>
            <Texttitle>
                Dawid Rak
            </Texttitle>
            <Undertitle>
                Frontend Developer
            </Undertitle>
        </Wrapper>
        <Arrowwrapper>
            <Rightarrow></Rightarrow>
            <Arrow></Arrow>
            <Leftarrow></Leftarrow>
        </Arrowwrapper>
    </>
)
}

export default fronttitle;