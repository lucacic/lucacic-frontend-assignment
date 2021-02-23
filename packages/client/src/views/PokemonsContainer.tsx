import React, { FunctionComponent, SyntheticEvent, useCallback, useEffect, useState } from 'react';

// Components
import PokemonList from '../components/PokemonList/PokemonList';
import PokemonSearch from '../components/PokemonSearch/PokemonSearch';

// Interfaces
import { ResultQuery, ResultQueryMore, EdgePokemon, NodePokemon } from '../shared/interfaces/interface';

// Service
import { usePokemonsQuery, useSearchPokemonByName } from '../shared/services/apolloQuery';


const getNodes = (data: ResultQuery) : NodePokemon[]  => {
    return data.pokemons.edges.map((edge: EdgePokemon) => edge.node);
} 


/**
 * 
 * 
 * 
 */
const PokemonsContainer = () => {

    const [
        fetchPokemons, { 
        loading,
        error, 
        data: resultPokemonsQuery, 
        fetchMore 
    }] = usePokemonsQuery();

    const [
        fetchPokemonByName, { 
        data: resultSearchQuery 
    }] = useSearchPokemonByName()


    const [pokemonList, setPokemonList]      = useState<NodePokemon[]>([]);
    const [pokemonToShow, setPokemonsToShow] = useState<NodePokemon[]>([]);

    const [searchValue, setSearchValue]      = useState<string | null>(null);

    const [hasNextPage, setHasNextPage]      = useState<boolean>(false);
    const [endCursor, setEndCursor]          = useState<string>('010');

    const [moreData, setMoreData]            = useState<ResultQueryMore>();
    const [loadingMore, setLoadingMore]      = useState<boolean>(false);


    /***************************************
     *            USE EFFECT               *
    ****************************************/


    // Run Pokemon query
    useEffect(() => {
        fetchPokemons()
    }, [])

    // Run Search query
    useEffect(() => {
        searchValue && fetchPokemonByName({ variables: { q: searchValue } })
    }, [searchValue])


    // Handle Result of Search query
    useEffect(() => {
        if (resultSearchQuery) {
            const pokemons = getNodes(resultSearchQuery);
            setPokemonsToShow(pokemons);
        }
    }, [resultSearchQuery])


    // Handle Result of fetchPokemon
    useEffect(() => {
        if (resultPokemonsQuery?.pokemons && pokemonList.length === 0) {
            const pokemonList = getNodes(resultPokemonsQuery);
            setPokemonList(pokemonList);
            setPokemonsToShow(pokemonList);
            const hasNextPage = resultPokemonsQuery?.pokemons.pageInfo.hasNextPage;

            setHasNextPage(hasNextPage);
            hasNextPage && getMorePokemos()
        }

    }, [resultPokemonsQuery])


    // Handle Result of fetchMore
    useEffect(() => {
        if (moreData) {
            const newPokemonLinst = getNodes(moreData.data);
            setPokemonList([...pokemonList, ...newPokemonLinst]);
            setPokemonsToShow([...pokemonList, ...newPokemonLinst]);
            setEndCursor(moreData.data.pokemons.pageInfo.endCursor);
        }
    }, [moreData])



    /***************************************
     *             ON EVENT                *
    ****************************************/

    const onPressEnter = (event: any) => {
        setSearchValue(event.target.value);
    }

    const onChange = (event: any) => {
        if (!event.target.value) {
            setSearchValue(null);
            setPokemonsToShow(pokemonList);
        }
    }

    const onSearch = (value: string) => {
        setSearchValue(value);
    }

    const paginationHandler = () => {
        getMorePokemos();
    }


    /***************************************
     *              FUNCTIONS              *
    ****************************************/


    const getMorePokemos = async () => {
        if (fetchMore && hasNextPage) {
            setLoadingMore(true);
            const newPokemons: ResultQueryMore = await fetchMore({ variables: { after: endCursor } });
            setMoreData(newPokemons);
            setLoadingMore(false);
            setHasNextPage(newPokemons.data.pokemons.pageInfo.hasNextPage);
        }
    }


    

    /***************************************
     *              RENDERING              *
    ****************************************/

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <>
            <PokemonSearch
                title='Pokèmon'
                onPressEnter={onPressEnter}
                onSearch={onSearch}
                onChange={onChange}
            />
            <PokemonList
                paginationHandler={paginationHandler}
                disabledPagination={searchValue !== null}
                pokemonList={pokemonToShow}
                loadingMore={loadingMore}
            />
        </>
    )

}


export default PokemonsContainer;