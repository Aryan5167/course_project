
import React, { useState } from 'react';
import './TopBar.css';
import { Bell, MessageSquareMore, Filter } from 'lucide-react';

const Topbar = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="topbar">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Logo" />
        <a href='/home'>
          <h1>RateMyCourse</h1>
        </a>
      </div>
      <div className="search-bar">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input style={{ marginLeft: "10px" }} type="text" placeholder="Search here..." />
        <Filter className="filter-icon" onClick={toggleFilter} />
        {showFilter && (
          <div className="filter-dropdown">
            <h3>Filter By:</h3>
            <div className='f-box'>
              <label>Department:</label>
              <select>
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Mathematics</option>
                {/* Add more departments as needed */}
              </select>
            </div>
            <div className='f-box'>
              <label>Rating:</label>
              <select>
                <option>All Ratings</option>
                <option>5 Stars</option>
                <option>4 Stars & Up</option>
                <option>3 Stars & Up</option>
                {/* Add more ratings as needed */}
              </select>
            </div>
            <div className='f-box'>
              <label>Semester:</label>
              <select>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
                {/* Add more ratings as needed */}
              </select>
            </div>
            <button onClick={toggleFilter}>Apply Filters</button>
          </div>
        )}
      </div>
      <div className="user-section">
        <MessageSquareMore className="icon" />
        <Bell className="icon" />
        <div className="profile">
          <img src="/images/demo_person.jpg" alt="User" />
          <span>Dipu paul</span>
          <i className="arrow-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

