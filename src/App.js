import { useState } from 'react';
import {
  Flex,
  Spacer,
  Text,
  useColorMode,
  VStack,
  Heading,
  Button,
  Image,
} from '@chakra-ui/react'
import ThemeToggler from './components/ThemeToggler';
import Foods from './foods.json'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const App = () => {
  const [food, setFood] = useState('什么');
  const [isStarted, setIsStarted] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = async () => {
    setIsStarted(true);
    for (let _ = 0; _ < 10; _++) {
      await new Promise(r => setTimeout(r, 200));
      const idx = getRandomInt(0, Foods.length);
      setFood(Foods[idx]);
    }
    setIsStarted(false);
  }

  return (
    <Flex padding='5' direction='column'>
      <Flex paddingLeft='5' paddingRight='5'>
        <Text
          fontSize='3xl'
          fontWeight='bold'
        >What-to-eat?</Text>
        <Spacer />
        <ThemeToggler
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
      </Flex>
      <VStack paddingTop='100px' spacing="5">
        <Heading>今天吃{food}{food === '什么' ? '?' : '!'}</Heading>
        {food !== '什么' && !isStarted && <Image
          height="300px"
          alt=""
          src={process.env.PUBLIC_URL + `/foods/${food}.jpg`}
        />}
        {!isStarted && <Button
          colorScheme='teal'
          variant='solid'
          onClick={handleClick}>开始</Button>}
      </VStack>
    </Flex>
  )
}

export default App;