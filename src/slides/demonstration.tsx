import { Slide, Heading, FlexBox, Box, Text, Appear, Notes } from 'spectacle';

const Demonstration = () => {
  return (
    <Slide backgroundColor='primary'>
      <Heading color='tertiary' fontSize='h2' marginBottom='1.5em'>
        Demonstração
      </Heading>
      <FlexBox flexDirection='column' gap='1em'>
        <Appear>
          <Box
            backgroundColor='secondary'
            padding='1.5em'
            borderRadius='10px'
            width='80%'
          >
            <Text color='tertiary' fontSize='1.5em'>
              ✓ Passo 1: Configuração inicial
            </Text>
          </Box>
        </Appear>
        <Appear>
          <Box
            backgroundColor='secondary'
            padding='1.5em'
            borderRadius='10px'
            width='80%'
          >
            <Text color='tertiary' fontSize='1.5em'>
              ✓ Passo 2: Implementação
            </Text>
          </Box>
        </Appear>
        <Appear>
          <Box
            backgroundColor='secondary'
            padding='1.5em'
            borderRadius='10px'
            width='80%'
          >
            <Text color='tertiary' fontSize='1.5em'>
              ✓ Passo 3: Resultado final
            </Text>
          </Box>
        </Appear>
      </FlexBox>
      <Notes>Demonstração passo a passo com animações.</Notes>
    </Slide>
  );
};

export default Demonstration;
