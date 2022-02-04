import React from 'react'

import { DataFetching } from './api/DataFetching';

const App: React.FC = () =>{

  return (
    <div className='container'>
      <div className='box'>
        <DataFetching />
      </div>
    </div>
  );
}

export default App;
