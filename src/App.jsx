import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Sentence from './Sentence';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top:5rem;
  flex-direction:column;
  padding-top:5rem;
  margin:5rem;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top: 10rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;


function App() {
  
  //state phrase
  const [sentence, setSentence] = useState({});

  //useEffect
  useEffect( () =>{
    consultApi();
  }, []);

  const consultApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    setSentence(phrase[0])
    
  }
  return (
    <Container>
      <Button
        onClick={consultApi}
      >
        Get phrases
      </Button>
      <Sentence
        sentence={sentence}
      />
    </Container>
  );
}

export default App;
