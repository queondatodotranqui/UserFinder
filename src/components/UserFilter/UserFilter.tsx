import { PropsGenderFilter } from '../../models/userModel';
import { Box, Button, ButtonGroup, Heading, IconButton, ModalBody, ModalContent, ModalFooter, ModalHeader, Text } from '@chakra-ui/react';

import { Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const UserFilter = (props:PropsGenderFilter) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box display='flex' padding='5vh'>
            <Text lineHeight='10' marginRight='2vh'>Search filter</Text>
            <IconButton colorScheme='linkedin' aria-label='search' icon={<SearchIcon />} onClick={onOpen}/>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                
                <ModalContent height='40vh' padding='3vh'>
                    <ModalHeader>
                        <Heading as='h2'>Search filters</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <ButtonGroup display='flex' width='100%' justifyContent='flex-start'>
                            <Text lineHeight='10' marginRight='2vh' marginLeft='0.5'>Gender</Text>
                            <Button
                                variant='ghost'
                                colorScheme='teal'
                                onClick={()=>{
                                    props.handleGender('male')
                                    props.onToggle()
                                    onClose()
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
                                    onClose()
                                }}
                            >
                                Female
                            </Button>
                        </ButtonGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='solid' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
        </Box>        
    );
};

export default UserFilter;