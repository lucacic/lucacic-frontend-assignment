import React from 'react';
import { Typography, Image } from 'antd';

const { Title } = Typography;

const PokemonTitle: React.FC<{ title?: string }> = ({ title }) => {

    return (
        <div style={{marginBottom: 25}}>
            <Image
                width={300}
                preview={false}
                style={{marginBottom: 8}}
                src="https://media.pokemoncentral.it/wiki/thumb/5/53/Logo_Pok%C3%A9mon.png/1200px-Logo_Pok%C3%A9mon.png"
            />
            {/*<Typography.Title level={4}>{title}</Typography.Title>*/}
        </div>

    )
}


export default PokemonTitle;