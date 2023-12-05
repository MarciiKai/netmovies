import React from 'react';

function Header() {
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
          <button type="button" > View Full Site ...</button>
        </div>

      </div>
    </header>
  );
}

export default Header;
