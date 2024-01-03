import useDebounce from '../../hooks/useDebounce'
import './search.css'

// eslint-disable-next-line react/prop-types
function Search({updateSearchTerm}){
    const debounceCallback = useDebounce((e)=>updateSearchTerm(e.target.value))
    return (
        <div className='search-wrapper'>
            <input type='text'
            id='username-search'
            placeholder='enter username'
            onChange={debounceCallback} />
        </div>
    )
}
export default Search;