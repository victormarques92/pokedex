'use client';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Pokemon } from '../@types/pokemon';
import { Pokecard, Pokeloader } from '../components';
import { ContainerHome } from './styles';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [initialLoad, setInitialLoad] = useState(false);

  const fetchMorePokemon = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=24`,
      );
      const data = await res.json();

      const newPokemonList = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
        }),
      );
      setPokemonList(prevPokemonList => [
        ...prevPokemonList,
        ...newPokemonList,
      ]);
      setOffset(prevOffset => prevOffset + 24);

      if (data.results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  useEffect(() => {
    if (!initialLoad && pokemonList.length === 0) {
      fetchMorePokemon();
      setInitialLoad(true);
    }
  }, [initialLoad, pokemonList]);

  return (
    <ContainerHome>
      <InfiniteScroll
        dataLength={pokemonList.length}
        next={fetchMorePokemon}
        hasMore={hasMore}
        loader={<Pokeloader />}
        endMessage={<p>No more Pokémon to load</p>}
      >
        {pokemonList.map((pokemon: Pokemon) => (
          <Pokecard
            key={pokemon.name}
            element={
              pokemon.types?.map(
                poke => poke.type.name,
              ) as string[]
            }
            image={pokemon.sprites.front_default}
            name={pokemon.name}
            power={pokemon.base_experience}
            species={pokemon.species.name}
            url={`/pokemon/${pokemon.id}`}
          />
        ))}
      </InfiniteScroll>
    </ContainerHome>
  );
};

export default Home;
