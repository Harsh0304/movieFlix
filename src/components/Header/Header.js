import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
// import SearchResult from "../SearchResult/SearchResult";
// import useFetch from "../../Hooks/useFetch";
// import useFetch from "../../Hooks/useFetch";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  // const [seachResult, setSearchResult] = useState([]);
  // const { data, shimmer } = useFetch(searchText);

  const isNavShow = openMenu ? "show-nave" : "hide-nav";

  const handleSearch = (e) => {
    // return navigate(`/search?q=${searchText}`);
    // setSearchResult(data);
  };

  return (
    <div className="nav-wrapper">
      <div className="container">
        <div className="nav">
          <Link to="#" className="logo">
            <i className="bx bx-movie-play bx-tada main-color"></i>Fl
            <span className="main-color">i</span>x
          </Link>
          <div className="search__container">
            {showSearch && (
              <div className="search">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {/* <button >Search</button> */}
              </div>
            )}
            <span className="search-icon" onClick={handleSearch}>
              <FiSearch onClick={() => setShowSearch(!showSearch)} />
            </span>
          </div>

          <ul className={`nav__links ${isNavShow}`} id="nav-menu">
            <li></li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="movie/now_playing">Now Playing</Link>
            </li>
            <li>
              <Link to="movie/popular">Popular</Link>
            </li>
            <li>
              <Link to="movie/top_rated">Top Rated</Link>
            </li>
            <li>
              <Link to="movie/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link to="#" className="btn__sign btn-hover">
                <span>Sign in</span>
              </Link>
            </li>
          </ul>
          {/* <!-- MOBILE MENU TOGGLE --> */}
          <div className="hamburger-menu" id="hamburger-menu">
            <div
              className="hamburger"
              onClick={() => setOpenMenu(!openMenu)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
