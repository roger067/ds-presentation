import { Slide, FlexBox, Heading } from 'spectacle';
import { Avatar, ToggleTheme } from '../components';
import { LinkedinIcon, GithubIcon } from '../assets/socials';

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

        <div className='profile-card'>
          <Avatar
            image='https://media.licdn.com/dms/image/v2/D4D03AQG_oIqYE9ML5w/profile-displayphoto-scale_200_200/B4DZqEjafdIMAY-/0/1763160469053?e=1764806400&v=beta&t=vOovBBxrCghYFcQWxor0H2bsycdz7WM3ty2A4YDHELM'
            name='Rogério Moura'
            role='Frontend Developer'
          />
          <div className='socials'>
            <a
              href='https://www.linkedin.com/in/rogermoura12/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon />
            </a>
            <a
              href='https://github.com/roger067/ds-presentation'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </FlexBox>
    </Slide>
  );
};

export default ClosingSlide;
