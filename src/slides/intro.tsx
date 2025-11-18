import { FlexBox, Heading, Slide } from 'spectacle';
import { Avatar, ToggleTheme } from '../components';

const Intro = () => {
  return (
    <Slide backgroundColor='background'>
      <ToggleTheme />
      <FlexBox height='100%' flexDirection='column' justifyContent='center'>
        <Heading color='primary' fontSize='h2' fontWeight='normal'>
          Design Tokens e Style Dictionary: Como gerar temas para sua
          plataforma?
        </Heading>
        <Avatar
          image='https://media.licdn.com/dms/image/v2/D4D03AQG_oIqYE9ML5w/profile-displayphoto-scale_200_200/B4DZqEjafdIMAY-/0/1763160469053?e=1764806400&v=beta&t=vOovBBxrCghYFcQWxor0H2bsycdz7WM3ty2A4YDHELM'
          name='Rogério Moura'
          role='Frontend Developer'
        />
      </FlexBox>
    </Slide>
  );
};

export default Intro;
