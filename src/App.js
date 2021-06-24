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

  // TODO: idea for better filtering. 
  // add a new hook for an object that will have a type: and weaknesses: key and arrays as value
  // in my sortTypes function I can add to either key, the specific type I'm passing in. 
  // use the new state object to be the pivot point for my filters. 
  // this will allow me to refine my result to be more specific to the filter buttons that were clicked

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
