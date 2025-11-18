import { Slide, Heading, CodePane } from 'spectacle';
import { ToggleTheme } from '../components';

const Tokens = () => {
  return (
    <Slide backgroundColor='background'>
      <Heading
        color='primary'
        fontSize='h2'
        fontWeight='normal'
        marginBottom='1em'
      >
        Tokens
      </Heading>
      <ToggleTheme />
      <CodePane language='json' showLineNumbers={false}>{`
"gray": {
  "100": {
    "$type": "color",
    "$value": "#EEEEF0"
  }
},
"spacing": {
  "0": {
    "$type": "spacing",
    "$value": "0px"
  }
},
"opacity": {
  "5": {
    "$type": "opacity",
    "$value": "5%"
  }
},
"text": {
  "default": {
    "primary": {
      "$type": "color",
      "$value": "{gray.800}"
    }
  }
}
      `}</CodePane>
    </Slide>
  );
};

export default Tokens;
