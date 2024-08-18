

/*import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import TopBar from '../components/TopBar/TopBar';
import CalendarHistory from '../components/Calendar_History';
import Status from '../components/Stats/Stats';
import TopRatedCourses from '../components/TopRatedCourse/TopRatedCourses';
import DynamicGreeting from "../components/DynamicGreeting/DynamicGreeting";
import './Home.css';

function Home() {
    const userName = 'Geetu Arora'; // Replace with actual user name
    return (
        <div className="home-container">
            <Navbar />
            <div className="content-wrapper">
                <TopBar />
                <div className="left-column">
                    <DynamicGreeting name={userName} />
                    <Status />
                    <TopRatedCourses className="top-rated-courses" />
                </div>
                <div className="right-column">
                    <CalendarHistory />
                </div>
            </div>
        </div>
    );
}

export default Home;*/

import React from 'react';
import CalendarHistory from '../components/Calendar_History';
import Status from '../components/Stats/Stats';
import TopRatedCourses from '../components/TopRatedCourse/TopRatedCourses';
import DynamicGreeting from "../components/DynamicGreeting/DynamicGreeting";
import './Home.css';

function Home() {
    const userName = 'Geetu Arora'; // Replace with actual user name
    return (
        <div className="home-page">
            <div className="left-column">
                <DynamicGreeting name={userName} />
                <Status />
                <TopRatedCourses className="top-rated-courses" />
            </div>
            <div className="right-column">
                <CalendarHistory />
            </div>
        </div>
    );
}

export default Home;
