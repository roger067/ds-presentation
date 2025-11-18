import {
  Slide,
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Notes,
} from 'spectacle';

const AtomicDesign = () => {
  return (
    <Slide backgroundColor='tertiary'>
      <Heading color='primary' fontSize='h2' marginBottom='2em'>
        Agenda
      </Heading>
      <UnorderedList color='primary' fontSize='1.5em'>
        <Appear>
          <ListItem>Introdução ao Tema</ListItem>
        </Appear>
        <Appear>
          <ListItem>Conceitos Principais</ListItem>
        </Appear>
        <Appear>
          <ListItem>Exemplos Práticos</ListItem>
        </Appear>
        <Appear>
          <ListItem>Demonstração</ListItem>
        </Appear>
        <Appear>
          <ListItem>Conclusão e Próximos Passos</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>Este slide apresenta a estrutura da apresentação.</Notes>
    </Slide>
  );
};

export default AtomicDesign;
