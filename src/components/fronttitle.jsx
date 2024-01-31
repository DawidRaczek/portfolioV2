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
    text-align; center;
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
    </>
)
}

export default fronttitle;