import { Slide, Heading, UnorderedList, ListItem, Appear } from 'spectacle';
import { ToggleTheme } from '../components';

const Conclusion = () => {
  return (
    <Slide backgroundColor='background'>
      <ToggleTheme />
      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='1.5em'
      >
        Conclusão
      </Heading>
      <UnorderedList color='primary' fontSize='1.3em'>
        <Appear>
          <ListItem>Trazer robustez e escalabilidade ao seu projeto</ListItem>
        </Appear>
        <Appear>
          <ListItem>Fluxo claro e definido</ListItem>
        </Appear>
        <Appear>
          <ListItem>Design tokens são agnósticos a frameworks</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
};

export default Conclusion;
