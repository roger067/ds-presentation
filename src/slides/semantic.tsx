import {
  Slide,
  Heading,
  FlexBox,
  Box,
  UnorderedList,
  ListItem,
  Notes,
} from 'spectacle';

const Semantic = () => {
  return (
    <Slide backgroundColor='tertiary'>
      <Heading color='primary' fontSize='h2' marginBottom='1.5em'>
        Conceitos Principais
      </Heading>
      <FlexBox flexDirection='row' justifyContent='space-between'>
        <Box width='45%'>
          <Heading color='secondary' fontSize='h4' marginBottom='1em'>
            Vantagens
          </Heading>
          <UnorderedList color='primary' fontSize='1.2em'>
            <ListItem>Componentização</ListItem>
            <ListItem>Animações suaves</ListItem>
            <ListItem>Totalmente customizável</ListItem>
            <ListItem>Export para PDF</ListItem>
          </UnorderedList>
        </Box>
        <Box width='45%'>
          <Heading color='secondary' fontSize='h4' marginBottom='1em'>
            Características
          </Heading>
          <UnorderedList color='primary' fontSize='1.2em'>
            <ListItem>Baseado em React</ListItem>
            <ListItem>Temas personalizados</ListItem>
            <ListItem>Notas do apresentador</ListItem>
            <ListItem>Responsivo</ListItem>
          </UnorderedList>
        </Box>
      </FlexBox>
      <Notes>Conceitos principais divididos em duas colunas.</Notes>
    </Slide>
  );
};

export default Semantic;
