import React from 'react'

import Main from './components/Main/Main';
import { ChakraProvider, theme } from '@chakra-ui/react';

const App: React.FC = () =>{
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
