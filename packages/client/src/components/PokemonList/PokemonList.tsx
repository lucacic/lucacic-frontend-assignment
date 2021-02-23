import React, { FunctionComponent } from 'react';

import { Table, Typography, Input } from 'antd';
import columns from './columns';
import { NodePokemon } from '../../shared/interfaces/interface';

interface PokemonListProps {
  paginationHandler: () => void,
  pokemonList: NodePokemon[],
  loadingMore: boolean
  disabledPagination: boolean
}

const PokemonList: FunctionComponent<PokemonListProps> = ({paginationHandler, pokemonList, loadingMore, disabledPagination }) => {

  return (
    <>
      <div>
        <Table
          columns={columns}
          onChange={paginationHandler}
          dataSource={pokemonList}
          loading={loadingMore}
          pagination={{ pageSize: 10, position: ["topLeft"], total: 150, simple: true, disabled: disabledPagination}} />
      </div>
    </>
  )
}


export default PokemonList;