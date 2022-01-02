import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const ThemeToggler = ({ colorMode, toggleColorMode }) => {
    return (
        <IconButton
            onClick={toggleColorMode}
            colorScheme='teal'
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
    )
}

export default ThemeToggler;