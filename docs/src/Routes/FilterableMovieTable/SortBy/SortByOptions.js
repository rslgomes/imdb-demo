import './css/index.css';

function SortByOptions({ setSortType }) {
  return (
    <div className="sort-by-div">
      <div>Sort by</div>
      <div>
        <select
          className="custom-select"
          onChange={ ({ target: { value } }) => { setSortType(value); } }
        >
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
}

export default SortByOptions;
