const FilterBar = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="flex items-center justify-end mb-4 gap-2">
      <label className="text-sm">Sort:</label>
      <select
        className="select select-bordered select-sm"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default FilterBar;
