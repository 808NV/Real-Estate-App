import "./filter.scss";
import searchIcon from "../../assets/search.png";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        search results for <b>city</b>
      </h1>
      <div className="top">
        <div className="search">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select id="type" name="type">
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select id="property" name="property">
            <option value="any">any</option>
            <option value="house">House</option>
            <option value="apt">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button className="searchBtn">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
