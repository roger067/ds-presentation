import { Slide, Heading, Image } from 'spectacle';
import { ToggleTheme } from '../components';

import demonstrationImage from '../assets/images/demo.gif';

const Demonstration = () => {
  return (
    <Slide backgroundColor='background'>
      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='1.5em'
      >
        Demonstração
      </Heading>
      <ToggleTheme />
      <Image src={demonstrationImage} className='demo-image' />
    </Slide>
  );
};

export default Demonstration;
