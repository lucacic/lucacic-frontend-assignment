import React, { FunctionComponent, useEffect, useState } from 'react';

import { Table, Typography, Input } from 'antd';
import { getPokemons } from '../../services/apolloQuery';
import columns from './columns';


const { Search } = Input;
const { Title } = Typography;


const PokemonList: FunctionComponent = () => {

  const { loading, error, data, fetchMore } = getPokemons(null)

  const [pokemonList, setPokemonList] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [endCursor, setEndCursor] = useState('010');


  useEffect(() => {
    if (data?.pokemons && pokemonList.length === 0) {
      const { edges } = data.pokemons;
      const pokemonLinst = edges.map((item: any) => item.node);
      setPokemonList(pokemonLinst);
    }
  }, [data])


  const hendlerPagination = async (event: any) => {
    setLoadingMore(true);
    const newData: any = await fetchMore({ variables: { after: endCursor } });

    const { edges } = newData.data.pokemons;
    const newPokemonLinst: [] = edges.map((item: any) => item.node);

    setPokemonList([...pokemonList, ...newPokemonLinst]);
    setEndCursor(newData.data.pokemons.pageInfo.endCursor);

    setTimeout(() => {
      setLoadingMore(false);
    }, 200)

  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <Title>Pokèmons</Title>
        <Search placeholder="search Pokémons by name" enterButton />
      </div>
      <div>
        <Table
          columns={columns}
          onChange={hendlerPagination}
          dataSource={pokemonList}
          loading={loadingMore}
          pagination={{ pageSize: 10, total: 150, simple: true }} />
      </div>
    </>
  )
}


export default PokemonList;