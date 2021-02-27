import React from 'react';
import { Input } from 'antd';

interface PokemonSearchProps {
  onPressEnter: (event: any) => void
  onChange: (event: any) => void
  onSearch: (value: string, event: any) => void

}

/**
 * 
 * @param param0 
 * 
 */
const PokemonSearch: React.FC<PokemonSearchProps> = ({ onPressEnter, onSearch, onChange }) => {

  return (
    <>
      <div>
        <Input.Search
          onSearch={onSearch}
          onPressEnter={onPressEnter}
          onChange={onChange}
          placeholder="Search Pokémons by name"
          enterButton />
      </div>
    </>
  )
}


export default PokemonSearch;