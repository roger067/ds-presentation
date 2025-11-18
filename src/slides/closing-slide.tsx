import { Slide, FlexBox, Heading, Text, Box, Notes } from 'spectacle';

const ClosingSlide = () => {
  return (
    <Slide backgroundColor='secondary'>
      <FlexBox height='100%' flexDirection='column' justifyContent='center'>
        <Heading color='tertiary' fontSize='h1' marginBottom='1em'>
          Obrigado!
        </Heading>
        <Text color='tertiary' fontSize='2em' marginBottom='2em'>
          Perguntas?
        </Text>
        <Box backgroundColor='tertiary' padding='1.5em' borderRadius='10px'>
          <Text color='primary' fontSize='1.3em'>
            📧 seu.email@exemplo.com
          </Text>
          <Text color='primary' fontSize='1.3em' marginTop='0.5em'>
            🌐 www.seusite.com
          </Text>
        </Box>
      </FlexBox>
      <Notes>Slide final com informações de contato.</Notes>
    </Slide>
  );
};

export default ClosingSlide;
