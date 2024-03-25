import { ContainerPokecard, Text, Title } from './styles';

interface PokecardProps {
  element: string[];
  image: string;
  name: string;
  power: number;
  species: string;
  url: string;
}

const Pokecard = ({
  element,
  image,
  name,
  power,
  species,
  url,
}: PokecardProps) => {
  return (
    <ContainerPokecard href={url}>
      <img src={image} alt={name} />

      <div>
        <Title>{name}</Title>

        <Text>
          <strong>Power:</strong> {power}
        </Text>
        <Text>
          <strong>Raça:</strong> {species}
        </Text>
        <Text>
          <strong>Elemento:</strong> {element.join(', ')}
        </Text>
      </div>
    </ContainerPokecard>
  );
};

export default Pokecard;
