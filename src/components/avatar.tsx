import { Image, Text } from 'spectacle';

export default function Avatar({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <div className='avatar'>
      <Image size='3em' src={image} alt={name} />
      <div className='avatar-info'>
        <Text color='secondary' fontSize='1.2em'>
          {name}
        </Text>
        <Text color='tertiary' fontSize='1em'>
          {role}
        </Text>
      </div>
    </div>
  );
}
