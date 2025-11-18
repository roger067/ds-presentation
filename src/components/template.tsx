import { Text, FlexBox, Box, Progress } from 'spectacle';

const Template = () => (
  <FlexBox
    justifyContent='space-between'
    position='absolute'
    bottom={0}
    width={1}
  >
    <Box padding='0 1em'>
      <Text fontSize='1em' color='quaternary'>
        Minha Apresentação
      </Text>
    </Box>
    <Box padding='0 1em'>
      <Progress color='secondary' />
    </Box>
  </FlexBox>
);

export default Template;
