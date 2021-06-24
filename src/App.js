import { useState, useEffect } from 'react';
import './App.css';
import PokeCards from "./components/PokeCards";
import PokeFilters from './components/PokeFilters';

function App() {
  const [pokeInfo, setPokeInfo] = useState([]);
  const [filteredPoke, setFilteredPoke] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [filterState, setFilterState] = useState('type')
  const [types, setTypes] = useState([]);

  // todo: would like to figure out how to setup rows for poke evolutions paths. 
  // have these rows display 1-2-3 across
  // need to key off of the next_evolution array... if next_evolution.length
  // maybe use an array prototype that snags first occurence of next_evolution having a length... 
  // reference the num or name... may be able to key off index - num -1 or something
  // so, for each of these instances we create a <Row /> component, that has <Card /> components in them

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        const data = await response.json();
        if (data.pokemon) {
          setPokeInfo(data.pokemon);
          setFilteredPoke(data.pokemon);
          setTypes(mergeTypeData(data.pokemon))
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch(search);
  }, [search])

  const handleSearch = (value) => {
    const result = pokeInfo.filter((poke) => {
      return poke.name.toLowerCase().search(value.toLowerCase()) !== -1;
    })

    setFilteredPoke(result);
  }

  const mergeTypeData = (pokeData) => {
    const allTypes = pokeData.reduce((acc, poke) => {
      let mergedTypes = poke.type.concat(poke.weaknesses);
      if (acc.length === 0) {
        acc = mergedTypes;
      } else {
        acc = acc.concat(mergedTypes);
      }
      return acc;
    }, []);
    return [...new Set(allTypes.sort())];
  }

  const sortTypes = (type) => {

    const found = pokeInfo.reduce((foundTypes, poke) => {
      if (poke[filterState].includes(type)) {
        foundTypes.push(poke);
      } 
      return foundTypes
    }, []);

    setFilteredPoke(found);
  }


  return (
    <main>
      {error && <h3>{error}</h3>}
      <input
        className='search'
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder="search"
        name="search"
        value={search}
      />
      <button className='sortButton' onClick={() => setOpenFilter(openFilter => !openFilter)}>sort: type & weakness</button>

      {openFilter &&
        <div className='filterModal'>
          <section className='filterButtonWrap'>
            <button className={`typeToggle type ${filterState === 'type' ? 'active' : ''}`} onClick={() => setFilterState('type')}>TYPE</button>
            <button className={`typeToggle weakness ${filterState === 'weaknesses' ? 'active' : ''}`}  onClick={() => setFilterState('weaknesses')}>WEAKNESS</button>
            {types.map((type, index) => <PokeFilters key={type + index} type={type} sort={sortTypes} filterState={filterState} />)}
          </section>
        </div>
      }

      

      {<section className='cardsWrap'> {filteredPoke.map((poke, index) => <PokeCards key={poke + index} {...poke} />)} </section>}
    </main>
  )
}

export default App;
