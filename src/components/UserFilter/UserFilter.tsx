import { PropsGenderFilter } from '../../models/userModel';
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';


const UserFilter = (props:PropsGenderFilter) => {

    return (
        <Box display='flex' padding='5vh'>
            <ButtonGroup display='flex' width='100%' justifyContent='flex-start'>
                <Text lineHeight='10' marginRight='2vh' marginLeft='0.5'>Gender</Text>
                <Button
                    variant='ghost'
                    colorScheme='teal'
                    onClick={()=>{
                        props.handleGender('male')
                        props.onToggle()
                    }}
                >
                    Male
                </Button>
                <Button
                    variant='ghost'
                    colorScheme='teal'
                    onClick={()=>{
                        props.handleGender('female')
                        props.onToggle()
                    }}
                >
                    Female
                </Button>
            </ButtonGroup>
        </Box>        
    );
};

export default UserFilter;