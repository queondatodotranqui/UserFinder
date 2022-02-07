import {useState} from 'react';

import { baseURL, buildURL } from '../../services/userService';
import { DataFetching } from '../../api/DataFetching';
import UserFilter from '../UserFilter/UserFilter';

import { Box, Container, ScaleFade, Text, useDisclosure } from '@chakra-ui/react'

const Main = () => {

    const [url, setUrl] = useState(baseURL)
    const {isOpen, onToggle} = useDisclosure()

    const handleGender = (option:string) =>{
        onToggle()
        setUrl(buildURL(option))
    }

    return (
        <>
            <Box bg="lightblue" padding="3vh 5vh">
                <Text fontSize='1.5em' color='black'>
                    User Finder
                </Text>
            </Box>
            <Container height='auto'>
                <UserFilter handleGender={handleGender} onToggle={onToggle}/>
                <ScaleFade initialScale={0.9} in={isOpen}>
                    <Box padding="0 5vh" maxHeight='70vh' overflow='auto'>
                        <DataFetching url={url}/>
                    </Box>
                </ScaleFade>
            </Container>
        </>
        
    );
};

export default Main;