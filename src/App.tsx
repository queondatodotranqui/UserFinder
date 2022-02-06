import React, { useState } from 'react'
import UserFilter from './components/UserFilter';
import { DataFetching } from './api/DataFetching';
import { baseURL, buildURL } from './services/userService';


const App: React.FC = () =>{

  const [url, setUrl] = useState(baseURL)

  const handleGender = (option:string) =>{
    setUrl(buildURL(option))
  }

  return (
    <div className='container'>
      <UserFilter handleGender={handleGender}/>
      <div className='box'>
        <DataFetching url={url}/>
      </div>
    </div>
  );
}

export default App;
