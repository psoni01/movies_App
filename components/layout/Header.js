import { HStack, StatusBar, Box, Text } from "native-base";

const Header = () => (
    <>
        <StatusBar backgroundColor='#2c3e50' barStyle='light-content' />

        <Box safeAreaTop backgroundColor='#2c3e50' >
            <HStack bg='#2c3e50' px={1} py={0.1} alignItems='center' justifyContent='center'>
                <Text color='white' fontSize={20} fontWeight='bold' >Movies App</Text>
            </HStack> </Box>
    </>
);

export default Header;