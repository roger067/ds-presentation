import { Slide, Heading, Text, FlexBox, Box, Image } from 'spectacle';
import { ToggleTheme } from '../components';

import tokenStudioImage from '../assets/images/token-studio.avif';

const TokenStudio = () => {
  return (
    <Slide backgroundColor='background'>
      <ToggleTheme />

      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='1em'
      >
        Token Studio
      </Heading>
      <FlexBox flexDirection='row' justifyContent='space-between'>
        <Box width='45%'>
          <Text color='secondary' fontSize='1.5em' textAlign='left'>
            O Token Studio é uma ferramenta que permite criar e gerenciar tokens
            de design no Figma.
          </Text>
        </Box>
        <Box width='40%'>
          <Image
            src={tokenStudioImage}
            className='responsive-image rounded-xl'
          />
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default TokenStudio;
