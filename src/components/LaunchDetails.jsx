import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {Box, Flex, Text, Tag, Button, Square, Grid, Image, Spinner, Heading} from '@chakra-ui/react';
import * as API from '../services/launches';

export function LaunchDetails(){    
    const [launch, setLaunch]=useState({});     
    const {launchId} = useParams();
    
    useEffect( () => {
        API.getLaunchByFlightNumber (launchId).then(setLaunch).catch(console.log);
    },[launchId] );

    return(  
        <>  
            <Heading align='center' as='h1' size='lg' m={4} >Launch Detail</Heading>
            <Box key={launch.flight_number} bg='gray.100' p={4} m={4} borderRadius='lg'>
                {!launch ? <div><Spinner color='purple.500' /></div> : (
                    <>                    
                        <Flex>
                            <Grid templateColumns='repeat(3, 1fr)' gap={1}>
                                <Box>
                                    <Square size='150px'>                                    
                                        <Image src={launch.links?.mission_patch} />
                                    </Square>
                                </Box>

                                <Box>
                                    <Text fontSize='2xl'> Mission: <strong>{launch.mission_name}</strong></Text>                                                            
                                    <Text><strong>Year:</strong> {launch.launch_year}</Text>
                                    <Text><strong>Rocket:</strong> {launch.rocket?.rocket_name}</Text>
                                    <Text><strong>Launch site:</strong> {launch.launch_site?.site_name}</Text>                                
                                </Box>                                
                                <Box display="flex" alignItems="center" ml='auto' >
                                    <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
                                        {launch.launch_success ? 'Success' : 'Failure'}
                                    </Tag>
                                </Box>
                            </Grid>                   
                        </Flex>                                                
                    </>
                )}            
            </Box>
            <Box p={2} m={2}>
                <Flex>
                    <Box>
                        <Link to='/'>
                            <Button mt={2} colorScheme="purple">Back</Button>
                        </Link>

                    </Box>
                </Flex>
            </Box>
        </>
    )
}