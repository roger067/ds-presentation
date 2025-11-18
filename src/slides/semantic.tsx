import {
  Slide,
  Heading,
  UnorderedList,
  ListItem,
  FlexBox,
  Box,
  Image,
} from 'spectacle';
import { ToggleTheme } from '../components';

import semanticImage from '../assets/images/semantic.avif';

const Semantic = () => {
  return (
    <Slide backgroundColor='background'>
      <ToggleTheme />
      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='1.5em'
      >
        Semântica
      </Heading>
      <FlexBox flexDirection='row' justifyContent='space-between'>
        <Box width='45%'>
          <UnorderedList color='primary' fontSize='1.2em'>
            <ListItem>
              Folha de tokens: conjunto de tokens organizados por categoria,
              como border, size e color.
            </ListItem>
            <ListItem>
              Dimensão: tipo de valor que um token pode representar, como
              comprimento, massa, percentual, cor ou tempo.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box width='45%'>
          <Image src={semanticImage} className='responsive-image' />
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default Semantic;
