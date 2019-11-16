import React from 'react'

import ServerResponse from '../ServerResponse'

import './App.css'
import './style.sass'
import { StyledDiv } from './style'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>TEST create-react-app</p>
        <p className='test-sass'>SASS</p>
        <StyledDiv>styled-components</StyledDiv>
        <ServerResponse callAPI='/api/article/slider' />
      </header>      
    </div>
  );
}

export default App;
