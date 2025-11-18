import {
  Slide,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  FlexBox,
  Box,
  Appear,
} from 'spectacle';

import drawedFlowImage from '../assets/images/drawed-flow.webp';
import { ToggleTheme } from '../components';

const SdFormatters = () => {
  return (
    <Slide backgroundColor='background'>
      <ToggleTheme />
      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='1em'
      >
        Fluxo do Style Dictionary
      </Heading>
      <FlexBox
        flexDirection='row'
        justifyContent='space-between'
        marginTop='2em'
      >
        <Box width='25%'>
          <UnorderedList color='primary' fontSize='1.2em'>
            <Appear>
              <ListItem>Tokens</ListItem>
            </Appear>
            <Appear>
              <ListItem>Matchers</ListItem>
            </Appear>
            <Appear>
              <ListItem>Transformers</ListItem>
            </Appear>
            <Appear>
              <ListItem>Formatters</ListItem>
            </Appear>
            <Appear>
              <ListItem>Actions</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
        <Box width='65%'>
          <Appear>
            <Image src={drawedFlowImage} className='responsive-image' />
          </Appear>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default SdFormatters;
