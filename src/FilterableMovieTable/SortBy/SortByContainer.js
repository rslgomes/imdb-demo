import { useState } from 'react';
import SortByDropdown from './SortByDropdown';
import SortByOptions from './SortByOptions';

function SortByContainer({ setSortType }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div>
      <SortByDropdown
        isDropdownOpen={ isDropdownOpen }
        setIsDropdownOpen={ setIsDropdownOpen }
      />
      <SortByOptions
        setSortType={ setSortType }
        isDropdownOpen={ isDropdownOpen }
        setIsDropdownOpen={ setIsDropdownOpen }
      />
    </div>
  );
}
export default SortByContainer;
