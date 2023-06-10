function SortByDropdown({ isDropdownOpen, setIsDropdownOpen }) {
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div>Sort by...</div>
      <button onClick={ handleClick }>v</button>
    </div>
  );
}

export default SortByDropdown;
