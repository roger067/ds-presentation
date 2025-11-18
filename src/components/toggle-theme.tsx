import Logo from '../assets/logo';
import { useTheme } from '../hooks/useTheme';
import { THEME_MODE } from '../constants/theme';
import { FlexBox } from 'spectacle';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    console.log('theme', theme);
    setTheme(theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT);
  };

  return (
    <FlexBox
      justifyContent='flex-end'
      position='absolute'
      top='32px'
      right='32px'
      width={1}
    >
      <button className='toggle-theme-button' onClick={handleThemeChange}>
        <Logo className='logo' />
      </button>
    </FlexBox>
  );
}
