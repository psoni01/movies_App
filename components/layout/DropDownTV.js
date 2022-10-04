import { Center, Box, Select, CheckIcon, View} from "native-base";

const DropDownTV = (props) => {

    const {sortTV, handleSortTVChange} = props;
    return (
        <View>
        <Center>

                <Box maxW="300">
                    <Select selectedValue={sortTV} minWidth="200" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => handleSortTVChange(itemValue)}>

                        <Select.Item label="airing_today" value="airing_today" />
                        <Select.Item label="on_the_air" value="on_the_air" />
                        <Select.Item label="popular" value="popular" />
                        <Select.Item label="top_rated" value="top_rated" />
                    </Select>
                </Box>
            </Center>
            </View>
    )
}

export default DropDownTV;