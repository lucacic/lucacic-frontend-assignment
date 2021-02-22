import React, { FunctionComponent, useEffect, useState } from 'react';

import PokemonList from '../components/PokemonList/PokemonList';
import PokemonSearch from '../components/PokemonSearch/PokemonSearch';

import { getPokemons } from '../shared/services/apolloQuery';


const Pokemons = () => {

    const { loading, error, data, fetchMore } = getPokemons(null)

    const [pokemonList, setPokemonList] = useState<[]>([]);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [endCursor, setEndCursor] = useState<string>('010');


    useEffect(() => {
        if (data?.pokemons && pokemonList.length === 0) {
            const { edges } = data.pokemons;
            const pokemonLinst = edges.map((item: any) => item.node);
            setPokemonList(pokemonLinst);
        }
    }, [data])


    const hendlerPagination = async (event: any) => {
        setLoadingMore(true);
        const newData: any = await fetchMore({ variables: { after: endCursor } });

        const { edges } = newData.data.pokemons;
        const newPokemonLinst: [] = edges.map((item: any) => item.node);

        setPokemonList([...pokemonList, ...newPokemonLinst]);
        setEndCursor(newData.data.pokemons.pageInfo.endCursor);

        setTimeout(() => {
            setLoadingMore(false);
        }, 200)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <>
            <PokemonSearch title='Pokèmon'></PokemonSearch>
            <PokemonList
                hendlerPagination={hendlerPagination}
                pokemonList={pokemonList}
                loadingMore={loadingMore}
            />
        </>

    )

}


export default Pokemons;