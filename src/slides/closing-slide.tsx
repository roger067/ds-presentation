import { Slide, FlexBox, Heading } from 'spectacle';
import { Avatar, ToggleTheme } from '../components';

const ClosingSlide = () => {
  return (
    <Slide backgroundColor='background'>
      <FlexBox height='100%' flexDirection='column' justifyContent='center'>
        <ToggleTheme />
        <Heading
          color='primary'
          fontSize='h1'
          fontWeight='normal'
          marginBottom='1em'
        >
          Obrigado!
        </Heading>

        <div className=''>
          <Avatar
            image='https://media.licdn.com/dms/image/v2/D4D03AQG_oIqYE9ML5w/profile-displayphoto-scale_200_200/B4DZqEjafdIMAY-/0/1763160469053?e=1764806400&v=beta&t=vOovBBxrCghYFcQWxor0H2bsycdz7WM3ty2A4YDHELM'
            name='Rogério Moura'
            role='Frontend Developer'
          />
        </div>
      </FlexBox>
    </Slide>
  );
};

export default ClosingSlide;
