import React, { FunctionComponent, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import PokemonFilter from '../components/PokemonFilter/PokemonFilter';

// Components
import PokemonList from '../components/PokemonList/PokemonList';
import PokemonSearch from '../components/PokemonSearch/PokemonSearch';
import PokemonTitle from '../components/PokemonTitle/PokemonTitle';

// Interfaces
import { ResultQuery, ResultQueryMore, EdgePokemon, NodePokemon } from '../shared/interfaces/interface';

// Service
import { usePokemonsQuery, useFilterPokemonByType, useSearchPokemonByName } from '../shared/services/apolloQuery';
import { PokemonType } from '../utils/pokemonsType';


const getNodes = (data: ResultQuery): NodePokemon[] => {
    if (data.pokemons) {
        return data.pokemons.edges.map((edge: EdgePokemon) => edge.node);
    }
    if (data.pokemonsByType) {
        return data.pokemonsByType.edges.map((edge: EdgePokemon) => edge.node);
    }
    return []
}


import './style.css'

/**
 * 
 * POKEMONS VIEW CONTAINER
 * 
 */
const PokemonsContainer = () => {

    /***************************************
     *            QUERY                    *
    ****************************************/

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

    const [
        fetchPokemonByType, {
            data: resultFilterQuery
        }] = useFilterPokemonByType()


    /***************************************
     *            USE STATE                *
    ****************************************/

    const [pokemonList, setPokemonList] = useState<NodePokemon[]>([]);
    const [pokemonFiltred, setPokemonFiltred] = useState<NodePokemon[]>([]);
    const [pokemonToShow, setPokemonsToShow] = useState<NodePokemon[]>([]);

    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [filterType, setFilterType] = useState<string>();

    const [hasNextPage, setHasNextPage] = useState<boolean>(false);
    const [endCursor, setEndCursor] = useState<string>('010');

    const [moreData, setMoreData] = useState<ResultQueryMore>();
    const [loadingMore, setLoadingMore] = useState<boolean>(false);


    window.onbeforeunload = () => {
        fetchPokemonByType({ variables: { type: "reset" } })
    }


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

    // Handle Result of fetchPokemonByName
    useEffect(() => {
        if (resultSearchQuery) {
            const pokemons = getNodes(resultSearchQuery);
            setPokemonsToShow(pokemons);
        }
    }, [resultSearchQuery])


    // Handle Result of fetchPokemons
    useEffect(() => {
        if (resultPokemonsQuery?.pokemons) {
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
            moreData.data.pokemons && setEndCursor(moreData.data.pokemons.pageInfo.endCursor);
        }
    }, [moreData])

    // Handle filter type
    useEffect(() => {
        if (filterType === undefined) {
            return
        } else if (filterType !== PokemonType.all) {
            fetchPokemonByType({ variables: { type: filterType } })
        } else {
            fetchPokemonByType({ variables: { type: "All pokemon" } })
            setPokemonsToShow(pokemonList);
            setHasNextPage(true);
        }
    }, [filterType])


    useEffect(() => {
        if (resultFilterQuery && filterType !== PokemonType.all) {
            const pokemons = getNodes(resultFilterQuery);
            setPokemonFiltred(pokemons);
            setPokemonsToShow(pokemons);
            setHasNextPage(resultFilterQuery.pokemonsByType?.pageInfo.hasNextPage || false);
        }
    }, [resultFilterQuery])

    /***************************************
     *         HANDLERS                    *
    ****************************************/

    const onEnterPressHandler = (event: any) => {
        // setSearchValue(event.target.value);
    }
    
    const onSearchHandler = (value: string) => {
        // setSearchValue(value);
    }

    const onSelectHandler = (value: string) => {
        setFilterType(value);
    };

    const onChangeHandler  = (event: any) => {
        if (!event.target.value) {
            if (filterType === 'all' || filterType === undefined) {
                setPokemonsToShow(pokemonList);
                setHasNextPage(true);
            } else {
                setPokemonsToShow(pokemonFiltred);
            }
        }
        setSearchValue(event.target.value);
    }



    const onPaginationHandler = () => {
        getMorePokemos();
    }


    const getMorePokemos = async () => {
        if (fetchMore && hasNextPage) {
            console.log('pagination')
            setLoadingMore(true);
            const newPokemons: ResultQueryMore = await fetchMore({ variables: { after: endCursor } });
            setMoreData(newPokemons);
            setLoadingMore(false);
            newPokemons.data.pokemons && setHasNextPage(newPokemons.data.pokemons.pageInfo.hasNextPage);
        }
    }




    /***************************************
     *              RENDERING              *
    ****************************************/

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <>
            <PokemonTitle title="Search for your favorite Pokèmon"/>
            <div className="containerList">            
  
                <div className="containerSearch">
                    <PokemonFilter
                        onSelect={onSelectHandler}
                    />
                    <PokemonSearch
                        onPressEnter={onEnterPressHandler}
                        onSearch={onSearchHandler}
                        onChange={onChangeHandler}
                    />
                </div>
                <PokemonList
                    size={filterType === PokemonType.all || filterType === undefined ? 150 : pokemonToShow.length}
                    searchValue={searchValue}
                    disabledPagination={false}
                    pokemonList={pokemonToShow}
                    loadingMore={loadingMore}
                    paginationHandler={onPaginationHandler}
                />
            </div>

        </>
    )
}


export default PokemonsContainer;