import { Slide, Quote, Text, Notes } from 'spectacle';

const StyleDictionary = () => {
  return (
    <Slide backgroundColor='secondary'>
      <Quote color='tertiary' fontSize='2em'>
        "A melhor maneira de prever o futuro é inventá-lo."
      </Quote>
      <Text color='tertiary' fontSize='1.5em' marginTop='2em'>
        — Alan Kay
      </Text>
      <Notes>Slide com citação inspiradora.</Notes>
    </Slide>
  );
};

export default StyleDictionary;
