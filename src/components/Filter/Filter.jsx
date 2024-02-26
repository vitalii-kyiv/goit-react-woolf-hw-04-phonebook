const Filter = ({ changeFilter, filter }) => {
  return (
    <label>
      Find contacts by name
      <input
        onChange={changeFilter}
        type="search"
        name="filter"
        value={filter}
      />
    </label>
  );
};

export default Filter;
