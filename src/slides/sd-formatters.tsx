import { Slide, Heading, FlexBox, Box, Text, Notes } from 'spectacle';

const SdFormatters = () => {
  return (
    <Slide backgroundColor='tertiary'>
      <Heading color='primary' fontSize='h2' marginBottom='1em'>
        Visualização
      </Heading>
      <FlexBox height='60%' justifyContent='center' alignItems='center'>
        <Box
          backgroundColor='primary'
          width='60%'
          height='100%'
          borderRadius='20px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Text color='tertiary' fontSize='2em'>
            📊 Seu Gráfico ou Imagem Aqui
          </Text>
        </Box>
      </FlexBox>
      <Text color='quaternary' fontSize='1.2em' marginTop='1em'>
        Substitua este box por uma imagem usando o componente Image
      </Text>
      <Notes>Slide para inserir visualizações, gráficos ou imagens.</Notes>
    </Slide>
  );
};

export default SdFormatters;
