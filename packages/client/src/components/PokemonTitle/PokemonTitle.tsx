import React from 'react';
import { Typography, Image } from 'antd';

const { Title } = Typography;

const PokemonTitle: React.FC<{ title?: string, subTitle?: string }> = ({ title, subTitle }) => {

    return (
        <>
            <div style={{ marginBottom: 25, margin: "auto", width: "510px", textAlign: "center" , height: "720px" }}>
                <Image
                    width={'500px'}
                    preview={false}
                    style={{ marginBottom: 8 }}
                    src="https://media.pokemoncentral.it/wiki/thumb/5/53/Logo_Pok%C3%A9mon.png/1200px-Logo_Pok%C3%A9mon.png"
                />
                <Typography.Title style={{ paddingLeft: "45px"}} level={1}>{title}</Typography.Title>
                <Typography.Title style={{ paddingLeft: "41px"}}  level={4}>{subTitle}</Typography.Title>
            </div>
        </>


    )
}


export default PokemonTitle;