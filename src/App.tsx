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
import { useTheme } from './hooks/useTheme';

import '@getpingback/design-tokens/css/light.css';
import '@getpingback/design-tokens/css/dark.css';

function App() {
  const { theme } = useTheme();
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
