import React from 'react'
import './styles/index.scss';
import Button from './components/Button';

function App() {
  return (
   <Button type="danger" onClick={()=>{console.log('click')}}>123</Button>
  );
}

export default App;
