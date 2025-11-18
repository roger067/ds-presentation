import { Slide, Heading, Text, Box, Notes } from 'spectacle';

const Tokens = () => {
  return (
    <Slide backgroundColor='tertiary'>
      <Heading color='primary' fontSize='h2' marginBottom='1em'>
        Introdução
      </Heading>
      <Text
        color='primary'
        fontSize='1.5em'
        textAlign='left'
        marginBottom='1em'
      >
        Este é um template de apresentação criado com Spectacle.js, uma
        biblioteca React moderna para criar slides interativos.
      </Text>
      <Box
        backgroundColor='secondary'
        padding='2em'
        borderRadius='10px'
        marginTop='2em'
      >
        <Text color='tertiary' fontSize='1.3em' textAlign='center'>
          💡 Spectacle permite criar apresentações com o poder do React!
        </Text>
      </Box>
      <Notes>Introdução ao tema principal da apresentação.</Notes>
    </Slide>
  );
};

export default Tokens;
