import { Slide, Heading, CodePane, Notes } from 'spectacle';

const TokenStudio = () => {
  return (
    <Slide backgroundColor='tertiary'>
      <Heading color='primary' fontSize='h2' marginBottom='1em'>
        Exemplo de Código
      </Heading>
      <CodePane language='tsx'>{`import { Deck, Slide, Heading } from 'spectacle';

function Presentation() {
  return (
    <Deck>
      <Slide>
        <Heading>Olá, Mundo!</Heading>
      </Slide>
    </Deck>
  );
}`}</CodePane>
      <Notes>Exemplo de como exibir código na apresentação.</Notes>
    </Slide>
  );
};

export default TokenStudio;
