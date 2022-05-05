import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
        <>
            <Flex justifyContent={"flex-end"} alignItems={"center"}>
                <IconButton
                    backgroundColor={"transparent"}
                    _hover={
                        {backgroundColor: "transparent"}
                    }
                    aria-label='icon-dark' ml={8}
                    icon={isDark ? <SunIcon /> : <MoonIcon />}
                    isRound={false}
                    onClick={toggleColorMode}
                >
                </IconButton>
            </Flex>
        </>
    )
}

export default DarkMode;