function SortByOptions({ setSortType, isDropdownOpen, setIsDropdownOpen }) {
  const optionsArray = ['name', 'rating'];
  const handleClick = (event) => {
    setSortType(event.target.value);
    setIsDropdownOpen(false);
  };
  return isDropdownOpen ? (
    <div>
      {optionsArray.map ((option, index) => (
        <button
          key={ index }
          onClick={ handleClick }
          value={ option }
        >
          {option}
        </button>))}
    </div>
  ) : null;
}

export default SortByOptions;
