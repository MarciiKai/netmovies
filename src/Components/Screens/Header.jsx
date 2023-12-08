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
        <div className="footer-container">
        <div className="footer-text">
          <div className="footer-lead-in">
          Explore NetMovies, your premier destination for free online movies and TV series.
          </div>
          <div className="footer-heading text-uppercase">Here's why NetMovies stands out:  </div>
            <div className="footer-list">
            {/* <ul>
              <li>Ad-free experience</li>
              <li>Free and high-speed streaming</li>
              <li>No account needed</li>
              <li>One-click streaming convenience</li>
              <li>Extensive library with over 400,000 videos</li>
            </ul>
            </div> */}

            <div className="last-footer-text">
            If you're seeking a secure platform for online movie watching, give NetMovies a try. Enjoy our service? Bookmark and share with your friends.
            </div>
            <div className="last-text">
            Thank you for choosing NetMovies!
            </div>
            </div>
      </div>
    </header>
  );
}

export default Header;
