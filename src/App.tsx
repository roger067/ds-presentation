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
import { theme } from './theme';

function App() {
  return (
    <Deck theme={theme} template={Template}>
      <Intro />
      <AtomicDesign />
      <Tokens />
      <Semantic />
      <TokenStudio />
      <StyleDictionary />
      <SdFormatters />
      <Demonstration />
      <Conclusion />
      <ClosingSlide />
    </Deck>
  );
}

export default App;
