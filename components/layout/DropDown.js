import { Center, Box, Select, CheckIcon, View} from "native-base";

const DropDown = (props) => {

    const {sort, handleSortChange} = props;
    return (
        <View>
        <Center>

                <Box maxW="300">
                    <Select selectedValue={sort} minWidth="200" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => handleSortChange(itemValue)}>

                        <Select.Item label="now_playing" value="now_playing" />
                        <Select.Item label="popular" value="popular" />
                        <Select.Item label="top_rated" value="top_rated" />
                        <Select.Item label="upcoming" value="upcoming" />
                    </Select>
                </Box>
            </Center>
            </View>
    )
}

export default DropDown;