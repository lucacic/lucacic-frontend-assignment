import React from 'react';
import { Select } from 'antd';
import { PokemonType } from '../../utils/pokemonsType'

const { Option } = Select;


interface PokemonFilterProps {
    onSelect: (value: any) => void

}

/**
 * 
 * 
 * @param param0 
 */
const PokemonFilter: React.FC<PokemonFilterProps> = ({ onSelect }) => {

    return (
        <div style={{marginBottom: 15}}>
            <Select
                defaultValue="all"
                style={{ width: 200 }}
                placeholder="Select Pokemon Type"
                onSelect={onSelect}
                optionFilterProp="children"
            >
                <Option value='all'>All Pokèmon</Option>
                <Option value={PokemonType.electric}>{PokemonType.electric}</Option>
                <Option value={PokemonType.fairy}>{PokemonType.fairy}</Option>
                <Option value={PokemonType.fighting}>{PokemonType.fighting}</Option>
                <Option value={PokemonType.fire}>{PokemonType.fire}</Option>
                <Option value={PokemonType.flying}>{PokemonType.flying}</Option>
                <Option value={PokemonType.ghost}>{PokemonType.ghost}</Option>
                <Option value={PokemonType.grass}>{PokemonType.grass}</Option>
                <Option value={PokemonType.ground}>{PokemonType.ground}</Option>
                <Option value={PokemonType.ice}>{PokemonType.ice}</Option>
                <Option value={PokemonType.normal}>{PokemonType.normal}</Option>
                <Option value={PokemonType.poison}>{PokemonType.poison}</Option>
                <Option value={PokemonType.psychic}>{PokemonType.psychic}</Option>
                <Option value={PokemonType.rock}>{PokemonType.rock}</Option>
                <Option value={PokemonType.steel}>{PokemonType.steel}</Option>
                <Option value={PokemonType.water}>{PokemonType.water}</Option>

            </Select>
        </div>
    )
}


export default PokemonFilter;