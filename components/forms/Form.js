import { Button, FormControl, HStack, Icon, Input, VStack , Box, Select, CheckIcon, WarningOutlineIcon} from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

const Form = (props) => {

    const {value, type, handleValueChange, handleTypeChange, onSubmit} = props;
    // const [input, setInput] = useState("");

    return <Box alignItems="center">
        <FormControl isRequired >
            <VStack>
                <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>

                <Input value={value} w="100%" placeholder="i.e. James Bond, CSI"
                onChangeText={value => {
                    handleValueChange(value);
                }
                }
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                    } />

                <HStack>
                    <VStack>
                    <FormControl.Label>Choose Search Type</FormControl.Label>
                    <Select selectedValue={type} minWidth="200" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => handleTypeChange(itemValue)}>

                        <Select.Item label="movie" value="movie" />
                        <Select.Item label="multi" value="multi" />
                        <Select.Item label="tv" value="tv" />
                    </Select>
                    </VStack>
                    <Button onPress={onSubmit} startIcon={<Icon as={<Ionicons name='ios-search' />} />}>Search</Button>

                </HStack>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Movie/ TV Show name is required
                </FormControl.ErrorMessage>
            </VStack>
        </FormControl>

    </Box>;
};




export default Form;