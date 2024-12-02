/*import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ activePage, setActivePage }) => {
  const pages = ["dashboard", "about", "events"];

  return (
    <nav>
      <ul className="nav">
        {pages.map((page) => (
          <li key={page} className="nav-item">
            <button
              onClick={() => setActivePage(page)}
              className={`nav-link ${activePage === page ? "active" : ""}`}
              aria-current={activePage === page ? "page" : undefined}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default Navigation;*/
/*import React from 'react';
import './Navigation.css';

const Navigation = ({ activePage, setActivePage }) => {
    const pages = ['dashboard', 'about', 'events'];

    return (
        <header className="navbar">
            <h1 className="navbar-brand">Keshav Memorial Institute of Technology</h1>
            <nav className="navbar-menu">
                {pages.map((page) => (
                    <button
                        key={page}
                        className={`nav-link ${activePage === page ? 'active' : ''}`}
                        onClick={() => setActivePage(page)}
                    >
                        {page.charAt(0).toUpperCase() + page.slice(1)}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Navigation;*/
import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ activePage, setActivePage }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const pages = ['dashboard', 'about', 'academics'];
    const userPages = ['profile', 'settings', 'logout'];

    const handleMenuToggle = () => {
        setShowDropdown(prev => !prev);
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        setShowDropdown(false); // Close the dropdown when selecting a page
    };

    return (
        <header className="navbar">
            <h1 className="navbar-brand">Keshav Memorial Institute of Technology</h1>
            <nav className="navbar-menu">
                <div className="nav-links">
                    {pages.map((page) => (
                        <button
                            key={page}
                            className={`nav-link ${activePage === page ? 'active' : ''}`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </button>
                    ))}
                </div>

                
            </nav>

            {/* Mobile Search Bar */}
            <div className="mobile-search">
                <input type="text" placeholder="Search..." />
            </div>
        </header>
    );
};

export default Navigation;


