'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../../@types/pokemon';
import { Pokeloader, Progress } from '../../../components';
import {
  BoxTypes,
  Button,
  ButtonOutlined,
  Chip,
  ContainerPokeDetail,
  Image,
  Name,
} from './styles';

const PokemonDetail = () => {
  const params = useParams();
  const [data, setData] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);

  const getPokemonId = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.id}`,
      );
      const data = await res.json();

      setData(data);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      getPokemonId();
    }
  }, [params.id]);

  if (loading) {
    return <Pokeloader fullScreen />;
  }

  return (
    <>
      <ContainerPokeDetail>
        <Image
          src={
            data?.sprites.other['official-artwork'].front_default
          }
          alt={data?.name}
        />

        <div>
          <Name>{data?.name}</Name>

          <BoxTypes>
            {data?.types?.map(type => (
              <Chip key={type.type.name}>{type.type.name}</Chip>
            ))}
          </BoxTypes>

          {data?.stats?.map(stat => (
            <Progress
              key={stat.stat.name}
              title={stat.stat.name}
              value={stat.base_stat}
            />
          ))}
        </div>
      </ContainerPokeDetail>

      <Button href="/contact">Ir para contato</Button>
      <ButtonOutlined href="/">Voltar</ButtonOutlined>
    </>
  );
};

export default PokemonDetail;
