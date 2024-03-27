import './SearchBar.css'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'

export const SearchBar = ({ setSearchValue }) => {

  const {theme, setTheme} = useContext(ThemeContext)

  const handleOnChange = (event) => {
    // text is the value that the user is typing in input
    const text = event.target.value
    // setSearchValue sets searchValue in App.jsx
    setSearchValue(text)
  }

  const handleTheme = () => {
    if(theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  console.log(theme)

  return (
    <div className={`search-bar ${theme === 'light' ? 'light-search-bar' : ''}`}>
      <label> Search by maker:  </label>
      <input 
        type="text" 
        onChange={handleOnChange}
        className={`${theme === 'light' ? 'light-input' : ''}`}
      />
      <button
        className={`${theme === 'light' ? 'light-button' : ''}`}
      > SEARCH </button>
      <button 
        onClick={handleTheme}
        className={`${theme === 'light' ? 'light-button' : ''}`}
      > THEME </button>
    </div>
  )
}

SearchBar.propTypes = {
  setSearchValue: PropTypes.func
}
