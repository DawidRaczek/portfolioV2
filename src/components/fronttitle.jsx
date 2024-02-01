import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const Undertitle = styled.h2`
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

const Navleft = styled.div`
    z-index: 999;
    position: absolute;
    transform: rotateZ(-90deg) translateX(-50%);
    transform-origin: 0 50%;
    top: 50%;
    display: inline-block;
    padding: 10px;
    left: 40px;
`

const About = styled.h3`
    color: #fff;
    opacity: .5;
    white-space: nowrap;
    cursor: pointer;
    letter-spacing: 1.5px;
    font-size: 11px;
    transition: opacity .3s;

    &:hover {
        opacity: 1;
    }
`

const Navright = styled.div`
    z-index: 999;
    position: absolute;
    transform: rotateZ(-90deg) translateX(50%);
    transform-origin: 100% 50%;
    top: 50%;
    display: inline-block;
    padding: 10px;
    right: 40px;
`

const Mail = styled.h3`
    color: #fff;
    opacity: .5;
    white-space: nowrap;
    cursor: pointer;
    letter-spacing: 1.5px;
    font-size: 11px;
    transition: opacity .3s;

    &:hover {
        opacity: 1;
    }
`

const fronttitle = () => {


return (
    <>
        <Wrapper>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <Texttitle>
                    Dawid Rak
                </Texttitle>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >
            <Undertitle>
                Frontend Developer
            </Undertitle>
            </motion.div>
        </Wrapper>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <Arrowwrapper>
            <Rightarrow></Rightarrow>
            <Arrow></Arrow>
            <Leftarrow></Leftarrow>
        </Arrowwrapper>
        </motion.div>
        <Navleft>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", 
                                stiffness: 400, 
                                damping: 17,
                                duration: 0.8,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01]    
                            }}       
            >
                <About>
                    About
                </About>
            </motion.div>
        </Navleft>
        <Navright>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", 
                                stiffness: 400, 
                                damping: 17,
                                duration: 0.8,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01]    
                            }}       
            >
                <Mail>
                    dawidrak.contact@gmail.com
                </Mail>
            </motion.div>
        </Navright>
    </>
)
}

export default fronttitle;