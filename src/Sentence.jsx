import React from 'react';
import styled from '@emotion/styled';

const SencenceContainer = styled.div`
    padding: 1rem;
    border-radius: .5rem;
    background : #fff;
    max-width:800px;

    @media (min-width: 992px){
        margin-top: 1rem;
    }
    h1{
        text-align:center;
        position:relative;
        &::before{
            padding:.5rem;
            content: open-quote;
            font-size:3rem;
            position:absolute;
            left: -1rem;
            top:-2rem
        }
    }
    p{
        font-weight:bold;
        text-align:right;
        color:#687;
  
    }
`;

const Sentence = ({sentence}) => {
    return (
        <SencenceContainer>
            <h1>{sentence.quote}</h1>
            <p>{sentence.author}</p>
        </SencenceContainer>
    );
};

export default Sentence;