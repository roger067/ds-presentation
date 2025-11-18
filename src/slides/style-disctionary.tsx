import { FlexBox, Heading, Image, Slide, Text } from 'spectacle';
import { ToggleTheme } from '../components';

import styleDictionaryImage from '../assets/images/sd-flow.avif';

const StyleDictionary = () => {
  return (
    <Slide backgroundColor='background'>
      <ToggleTheme />
      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='1.5em'
      >
        Style Dictionary
      </Heading>
      <FlexBox flexDirection='column' gap='2em'>
        <Text color='secondary' fontSize='1.5em' textAlign='left'>
          Style Dictionary é um framework que transforma tokens de design em
          variáveis. Faz a ponte entre o design e o código.
        </Text>
        <Image
          src={styleDictionaryImage}
          className='responsive-image'
          maxHeight='294px'
          maxWidth='65%'
        />
      </FlexBox>
    </Slide>
  );
};

export default StyleDictionary;
