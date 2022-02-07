import { Box, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import { UserData, FetchingData} from '../models/userModel';

export const DataFetching = (props: FetchingData) => {

    const [users, setUsers] = useState<UserData[]>([])
    const [error, setError] = useState<any>(false)

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const data = await axios.get(`${props.url}`)
                setUsers(data.data.results)
            }
            catch(error){
                console.log(error)
                setError(true)
            }
        }
        fetchData()
    }, [props.url])

    return (
        <div>
            {
                users && !error ? (
                    users.map((user, index)=>{
                        return(
                            <Box key={index} display='flex' padding='3vh' border='1px solid grey'>
                                <Image objectFit='contain' borderRadius='full' src={user.picture.medium} alt="user pfp"/>
                                <Box display='flex' padding='2vh' flexDirection='column' overflow='auto'>
                                    <Text fontSize={{base:'medium', sm:'small', md:'large'}}>{user?.name.first} {user?.name.last}</Text>
                                    <Text fontSize={{base:'medium', sm:'small'}}>{user?.email}</Text>
                                </Box>
                            </Box>
                        )
                    })
                ) : 'No data yet!'
            }
        </div>
    );
};