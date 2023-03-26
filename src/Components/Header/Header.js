import React, { useState } from "react";
import img from "../../Components/Netflix-logo-red-black-png.png";
import img2 from "../../Components/green.png";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  const [state, setstate] = useState(false);
  const [show, setshow] = useState(true);
  const [toggler, settoggler] = useState(false);
  const clickhandler = () => {
    setstate(!state);
    setshow(!show);
  };
  const blurhandler = () => {
    setstate(!state);
    setshow(!show);
  };
  const clickhandler2 = () => {
    settoggler(!toggler);
  };
  const blurhandler2 = () => {
    settoggler(!toggler);
  };
  return (
    <>
      <nav className=" navbar d-flex align-items-center justify-content-between">
        <img src={img} alt="not seen" className="img"></img>

        <div className="links ">
          <button
            className="button bg-danger border border-danger rounded "
            onClick={clickhandler2}
            onBlur={blurhandler2}
            autoFocus
          >
            Menu
          </button>
          {toggler && (
            <ul className=" ul ">
              <li className="mt-3">Home</li>
              <li className="mt-3"> TV Shows</li>
              <li className="mt-3"> Movies</li>
              <li className="mt-3">New and popular</li>
              <li className="mt-3">My List</li>
              <li className="mt-3 ">Browse By Languages</li>
            </ul>
          )}
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            TV Shows
          </Link>
          <Link to="/" className="link">
            Movies
          </Link>
          <Link to="/" className="link">
            New and popular
          </Link>
          <Link to="/" className="link">
            My List
          </Link>
          <Link to="/" className="link">
            Browse By Languages
          </Link>
        </div>

        <p className="text-light search">
          {show && <BsSearch className="" onClick={clickhandler}></BsSearch>}
        </p>
        {state && (
          <div className="searchdiv ">
            <BsSearch className=" searchicon"></BsSearch>
            <input
              type="search"
              className="input1"
              onBlur={blurhandler}
              autoFocus
            ></input>
          </div>
        )}

        <img src={img2} alt="not" className="img2"></img>
      </nav>
    </>
  );
};

export default Header;
