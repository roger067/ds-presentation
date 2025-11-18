import {
  Slide,
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Box,
  FlexBox,
  Image,
} from 'spectacle';
import { ToggleTheme } from '../components';

import atomicDesignImage from '../assets/images/atomic-design-product.jpg';

const AtomicDesign = () => {
  return (
    <Slide backgroundColor='background'>
      <ToggleTheme />
      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='2em'
      >
        Atomic Design
      </Heading>
      <FlexBox flexDirection='row' justifyContent='space-between'>
        <Box width='35%'>
          <UnorderedList color='secondary' fontSize='1.5em'>
            <Appear>
              <ListItem>Átomos</ListItem>
            </Appear>
            <Appear>
              <ListItem>Moléculas</ListItem>
            </Appear>
            <Appear>
              <ListItem>Organismos</ListItem>
            </Appear>
            <Appear>
              <ListItem>Templates</ListItem>
            </Appear>
            <Appear>
              <ListItem>Páginas</ListItem>
            </Appear>
          </UnorderedList>
        </Box>
        <Box width='55%'>
          <Appear>
            <Image src={atomicDesignImage} className='responsive-image' />
          </Appear>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default AtomicDesign;
