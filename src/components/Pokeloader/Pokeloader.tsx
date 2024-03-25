import {
  ContainerPokeball,
  Pokeball,
  PokeloaderProps,
} from './styles';

const Pokeloader = ({ fullScreen }: PokeloaderProps) => {
  return (
    <ContainerPokeball fullScreen={fullScreen}>
      <Pokeball />
    </ContainerPokeball>
  );
};

export default Pokeloader;
