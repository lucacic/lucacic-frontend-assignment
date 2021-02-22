import React, { FunctionComponent } from 'react';

import { Table, Typography, Input } from 'antd';
import columns from './columns';


const { Search } = Input;
const { Title } = Typography;

interface PokemonListProps {
  paginationHandler: () => void,
  pokemonList: [],
  loadingMore: boolean
}

const PokemonList: FunctionComponent<PokemonListProps> = ({paginationHandler, pokemonList, loadingMore }) => {

  return (
    <>
      <div>
        <Table
          columns={columns}
          onChange={paginationHandler}
          dataSource={pokemonList}
          loading={loadingMore}
          pagination={{ pageSize: 10, total: 150, simple: true }} />
      </div>
    </>
  )
}


export default PokemonList;