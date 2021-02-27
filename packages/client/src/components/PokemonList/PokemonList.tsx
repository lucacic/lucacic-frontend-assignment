import React from 'react';

import { Table, Typography, Input } from 'antd';
import columns from './columns';
import { NodePokemon } from '../../shared/interfaces/interface';

interface PokemonListProps {
  paginationHandler: () => void,
  pokemonList: NodePokemon[],
  loadingMore: boolean
  disabledPagination: boolean
  searchValue: string | null;
  size: number,
  filterType?: string | undefined
}

/**
 * 
 * 
 * @param param0 
 */
const PokemonList: React.FC<PokemonListProps> = ({ paginationHandler, pokemonList, loadingMore, disabledPagination, searchValue, size }) => {

  return (
    <>
      <div>
        <Table
          columns={columns(searchValue)}
          onChange={paginationHandler}
          dataSource={pokemonList}
          loading={loadingMore}
          pagination={{
            pageSize: 10,
            position: ["topLeft"],
            total: size,
            simple: true,
            disabled: disabledPagination,
          }} />
      </div>
    </>
  )
}


export default PokemonList;