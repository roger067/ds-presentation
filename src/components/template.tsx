import { FlexBox } from 'spectacle';
import Spiral from '../assets/spiral';

const Template = () => {
  return (
    <FlexBox
      justifyContent='space-between'
      position='absolute'
      bottom='0px'
      width={1}
    >
      <Spiral />
    </FlexBox>
  );
};

export default Template;
