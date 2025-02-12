import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

const SearchBar = ({ setSearchQuery, resultCount }) => {
    const [query, setQuery] = useState('');
    
    const handleSearch = debounce((value) => {
        if (value.length > 2) {
            setSearchQuery(value);
            console.log('query:', query);
        } else {
            setSearchQuery("");
        }
    }, 500);

    useEffect(() => {
        handleSearch(query);
    }, [query]);

    return (
        <>
        <div className='search-container'>
            <input autoFocus type='text' placeholder='Search characters...' value={query} onChange={(e) => setQuery(e.target.value)} className='search-bar'/> 
        </div>
        {query.length > 2 && (
            <p className="search-result-count">Found characters: {resultCount}</p>
        )}
        </>
    )
}

export default SearchBar;