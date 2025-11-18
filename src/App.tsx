import { Deck } from 'spectacle';

import { Template } from './components';
import {
  Intro,
  AtomicDesign,
  Tokens,
  Semantic,
  TokenStudio,
  StyleDictionary,
  SdFormatters,
  Demonstration,
  Conclusion,
  ClosingSlide,
} from './slides';

import { THEME } from './theme';
import '@getpingback/design-tokens/css/light.css';
import '@getpingback/design-tokens/css/dark.css';

function App() {
  return (
    <Deck theme={THEME} template={Template}>
      <Intro />
      <AtomicDesign />
      <TokenStudio />
      <StyleDictionary />
      <Semantic />
      <Tokens />
      <SdFormatters />
      <Demonstration />
      <Conclusion />
      <ClosingSlide />
    </Deck>
  );
}

export default App;
