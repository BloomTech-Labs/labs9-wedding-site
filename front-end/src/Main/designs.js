import React from 'react';
import styled from 'styled-components';


const Designs = styled.div`
margin: auto;
margin-top: 200px;
border: 1px solid black;
background-color: white;
width: 80%;
display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
height: 850px;
`

const DesignContainer = styled.div`
margin: 40px;
border: 1px solid black;
background-color: white;
display: flex;
align-items:Center;
justify-content: center;
width: 200px;
height: 150px;
`

function Design() {
    return (
        <Designs>
            <DesignContainer>
                <h1>Design 1</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 2</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 3</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 4</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 5</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 6</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 7</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 8</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 9</h1>
            </DesignContainer>
            <DesignContainer>
                <h1>Design 10</h1>
            </DesignContainer>
        </Designs>
    );
}

export default Design;