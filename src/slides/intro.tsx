import { FlexBox, Heading, Slide, Text, Notes } from 'spectacle';

const Intro = () => {
  return (
    <Slide backgroundColor='primary'>
      <FlexBox height='100%' flexDirection='column' justifyContent='center'>
        <Heading color='tertiary' fontSize='h1'>
          Título da Apresentação
        </Heading>
        <Text color='secondary' fontSize='2em' marginTop='2em'>
          Subtítulo ou Descrição
        </Text>
        <Text color='quaternary' fontSize='1.5em' marginTop='2em'>
          Seu Nome • Data
        </Text>
      </FlexBox>
      <Notes>Notas do apresentador para o slide de título.</Notes>
    </Slide>
  );
};

export default Intro;
