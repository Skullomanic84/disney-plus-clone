import React from 'react';
import styled from "styled-components";

function Login() {
    return (
        <Container>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg"/>
                    <SignUp>Get all there</SignUp>
                    <Description>
                        Get premium Access to Raya and the last Dragon for an additional fee with a Disney+ subscription. As of 03/26/2021, the price of Disney+ and The Disney Bundle will increase by $1. 
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png"/>
                </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.7;
    }

`



const CTA = styled.div `
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img `

`
const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 5px;
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 350ms;
    letter-spacing: 1.5px;
    margin-top: 12px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`
const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 12px;

`

const CTALogoTwo = styled(CTALogoOne) `
    width: 90%;
`