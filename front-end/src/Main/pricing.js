import React from 'react';
import styled from 'styled-components';


const Packages = styled.div`
margin: auto;
margin-top: 200px;
border: 1px solid black;
background-color: white;
width: 70%;
display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
height: 650px;
`

const PkgsContainer = styled.div`
margin: 50px;
margin-bottom: 0;
border: 1px solid black;
background-color: white;
display: flex;
align-items:Center;
justify-content: center;
width: 200px;
height: 90px;
`

const Description = styled.div`
margin: 50px;
margin-top: 0;
border: 1px solid black;
background-color: white;
display: flex;
align-items:Center;
justify-content: center;
width: 200px;
height: 380px;
`

function Prices() {
    return (

        <Packages>
            <PkgsContainer>
                <h1>Package 1</h1>
            </PkgsContainer>
            <PkgsContainer>
                <h1>Package 2</h1>
            </PkgsContainer>
            <PkgsContainer>
                <h1>Package 3</h1>
            </PkgsContainer>
            <Description>
                <h1>Package 1</h1>
            </Description>
            <Description>
                <h1>Package 2</h1>
            </Description>
            <Description>
                <h1>Package 3</h1>
            </Description>
        </Packages>

    );
}

export default Prices;