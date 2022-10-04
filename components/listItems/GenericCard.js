import { Box, Button, Center, Divider, Heading, Image, Text, VStack, HStack } from "native-base";
import { useNavigation } from '@react-navigation/native';

const GenericCard = props => {
    const { id, title, image, popularity, release} = props;
    const navigation = useNavigation();
    const type = 'movie';

    return (
        <Box borderWidth={1} borderRadius='md' pb={5} mb={10} >
            <HStack space={4}  >

                <Box>
                  {title && image ? <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w500/${image}`}} size='xl' />
              : <></>}    </Box>
                <Box px={4} py={4}>
                    <VStack >
                        <Text >{title}</Text>
                        <Text >Popularity: {popularity}</Text>
                        <Text >Release Date: {release}</Text>
                        <Button  onPress={() => {
                            navigation.setOptions({ title: title });
                            navigation.navigate('Details', { 
                                id, title, type
                            })}}> More Details</Button>

                    </VStack>
                </Box>


            </HStack>
        </Box>
    );
};

export default GenericCard;