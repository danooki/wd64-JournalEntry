import FilterBar from "./FilterBar";

const Navbar = ({ onAddClick, sortOrder, setSortOrder }) => {
  return (
    <div className="navbar bg-amber-500 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Daily Journal</a>
        {/* trigger modal from App.jsx via prop */}
        <button className="btn btn-primary" onClick={onAddClick}>
          Add New Entry
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <FilterBar sortOrder={sortOrder} setSortOrder={setSortOrder} />

        <input
          type="text"
          placeholder="Search"
          className="input input-bordered md:w-60"
        />
      </div>
    </div>
  );
};

export default Navbar;
