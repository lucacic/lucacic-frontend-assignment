import React, { FunctionComponent } from 'react';

import { Typography, Input } from 'antd';


const { Search } = Input;
const { Title } = Typography;

interface PokemonSearchProps {
    title: string
}

const PokemonSearch: FunctionComponent<PokemonSearchProps> = ({title}) => {

  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <Title>{title}</Title>
        <Search placeholder="search Pokémons by name" enterButton />
      </div>
    </>
  )
}


export default PokemonSearch;