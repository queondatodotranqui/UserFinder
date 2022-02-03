import React from 'react'

import { DataFetching } from './services/DataFetching';

const App: React.FC = () =>{

  return (
    <div className='container'>
      <div className='box'>
        <DataFetching filter='users/1'/>
        <DataFetching filter='users/2'/>
        <DataFetching filter='users/3'/>
        <DataFetching filter='users/4'/>
      </div>
    </div>
  );
}

export default App;
