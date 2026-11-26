function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <label htmlFor="project-search">Search Tint & Tone Projects</label>
      <input
        id="project-search"
        type="text"
        placeholder="Search by name, category, or description..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;