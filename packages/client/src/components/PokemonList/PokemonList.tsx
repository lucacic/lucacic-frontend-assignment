import React, { FunctionComponent, useEffect, useState } from 'react';

import { Table, Typography, Input } from 'antd';
import { getPokemons } from '../../shared/services/apolloQuery';
import columns from './columns';


const { Search } = Input;
const { Title } = Typography;

interface PokemonListProps {
  hendlerPagination: (event: any) => Promise<void>,
  pokemonList: [],
  loadingMore: boolean
}

const PokemonList: FunctionComponent<PokemonListProps> = ({hendlerPagination, pokemonList, loadingMore }) => {

  return (
    <>
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