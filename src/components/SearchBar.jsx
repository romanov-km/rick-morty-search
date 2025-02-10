import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

const SearchBar = ({setSearchQuery}) => {
    const [query, setQuery] = useState('');
    
    const handleSearch = debounce((value) => {
        if (value.length > 2) {
            setSearchQuery(value);
            console.log('query:', query);
        }
    }, 500);

    useEffect(() => {
        handleSearch(query);
    }, [query]);

    return (
        <div>
            <input autoFocus type='text' placeholder='Search characters...' value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
}

export default SearchBar;