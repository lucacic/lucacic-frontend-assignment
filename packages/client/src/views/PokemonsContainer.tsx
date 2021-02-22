import React, { FunctionComponent, useEffect, useState } from 'react';

import PokemonList from '../components/PokemonList/PokemonList';
import PokemonSearch from '../components/PokemonSearch/PokemonSearch';

import { usePokemonsQuery } from '../shared/services/apolloQuery';


const Pokemons = () => {

    const [ getPokemons , { loading, error, data, fetchMore } ] = usePokemonsQuery(null)

    const [pokemonList, setPokemonList] = useState<[]>([]);
    const [moreData, setMoreData] = useState<any>();
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [endCursor, setEndCursor] = useState<string>('010');


    // ------------ USE EFFECT ------------

    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(() => {
        if (data?.pokemons && pokemonList.length === 0) {
            const pokemonLinst = data?.pokemons?.edges?.map((item: any) => item.node);
            setPokemonList(pokemonLinst);
        }
        getMorePokemos();

    }, [data])

    useEffect(() => {
        if(moreData) {
            const newPokemonLinst: [] = moreData?.data?.pokemons?.edges.map((item: any) => item.node);
            setPokemonList([...pokemonList, ...newPokemonLinst]);
            setEndCursor(moreData.data.pokemons.pageInfo.endCursor);
        }
    
    }, [moreData])


    // ------------- FUNCTIONS --------------------

    const paginationHandler = () => {
        getMorePokemos();
    }

    const getMorePokemos = async () => {
        if(fetchMore) {
            setLoadingMore(true);
            const newPokemons: any = await fetchMore({ variables: { after: endCursor } });
            setMoreData(newPokemons);
            setLoadingMore(false);
        }
    }


    // ---------- RENDERING ---------------------

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <>
            <PokemonSearch title='Pokèmon'></PokemonSearch>
            <PokemonList
                paginationHandler={paginationHandler}
                pokemonList={pokemonList}
                loadingMore={loadingMore}
            />
        </>
    )

}


export default Pokemons;