import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

  const [activePage ,setActivePage] = useState("./")
const navigate = useNavigate();
const handleClick = () =>{
  setActivePage("./");
  navigate("/Movies");
};
  return (
    <header id="main">
      <div className="header-container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome to NetMovies</div>
          <div className="intro-heading text-uppercase">
            NetMovies is among the best online streaming sites for free
          </div>
        </div>
        

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
        <div className="full-site">
          <button onClick={handleClick} type="button" > View Full Site ...</button>
          {activePage === "/Movies" && <div>Show something for Movies page</div>}
        </div>
        </div>
    </header>
  );
}

export default Header;
