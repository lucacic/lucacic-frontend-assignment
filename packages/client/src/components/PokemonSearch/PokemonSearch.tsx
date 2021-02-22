import React, { FunctionComponent } from 'react';

import { Typography, Input } from 'antd';


const { Search } = Input;
const { Title } = Typography;

interface PokemonSearchProps {
    title: string
    onPressEnter: (event: any) => void
    onChange: (event: any ) => void
    onSearch: (value: string, event: any) => void

}

const PokemonSearch: FunctionComponent<PokemonSearchProps> = ({title, onPressEnter, onSearch, onChange}) => {

  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <Title>{title}</Title>
        <Search 
        onSearch={onSearch} 
        onPressEnter={onPressEnter} 
        onChange={onChange}
        placeholder="search Pokémons by name" 
        enterButton />
      </div>
    </>
  )
}


export default PokemonSearch;