import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Notes,
} from 'spectacle';

const Conclusion = () => {
  return (
    <Slide backgroundColor='tertiary'>
      <Heading color='primary' fontSize='h2' marginBottom='1.5em'>
        Conclusão
      </Heading>
      <Text
        color='primary'
        fontSize='1.5em'
        textAlign='left'
        marginBottom='2em'
      >
        Resumo dos pontos principais apresentados:
      </Text>
      <UnorderedList color='primary' fontSize='1.3em'>
        <ListItem>Spectacle é poderoso e flexível</ListItem>
        <ListItem>Fácil de customizar e estender</ListItem>
        <ListItem>Perfeito para apresentações técnicas</ListItem>
      </UnorderedList>
      <Notes>Slide de conclusão com resumo dos pontos principais.</Notes>
    </Slide>
  );
};

export default Conclusion;

