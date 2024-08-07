import React, { useState } from 'react';

const History = () => {
  const historyData = [
    { date: '29 Sept', courseName: 'Practical theory', description: 'Assignments' },
    { date: '29 Sept', courseName: 'Practical theory 1', description: 'Test' },
    { date: '29 Sept', courseName: 'Practical theory 2', description: 'Lessons' },
    { date: '29 Sept', courseName: 'Practical theory 3', description: 'Assignments' },
    { date: '30 Sept', courseName: 'Practical theory 4', description: 'Assignments' },
    { date: '30 Sept', courseName: 'Practical theory 5', description: 'Assignments' },
    { date: '30 Sept', courseName: 'Practical theory 5', description: 'Assignments' },
    { date: '30 Sept', courseName: 'Practical theory 5', description: 'Assignments' },
    { date: '30 Sept', courseName: 'Practical theory 5', description: 'Assignments' },
    // Add more history data as needed
  ];

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={`history-container ${showAll ? 'expanded' : ''}`}>
      <h2 className="history-title">Recent Activity</h2>
      <div className="history-content">
        {historyData.slice(0, showAll ? historyData.length : 5).map((item, index) => (
          <div className="history-item" key={index}>
            <div className={`date-box ${index % 3 === 0 ? 'date-box-1' : index % 3 === 1 ? 'date-box-2' : 'date-box-3'}`}>
              <span className="date-text">{item.date}</span>
            </div>
            <div className="course-info">
              <a href={`/course/${item.courseName}`} className="course-name" style={{fontWeight:500}}>{item.courseName}</a>
              <p className={`course-description ${item.description === 'Assignments' ? 'description-red' : item.description === 'Test' ? 'description-green' : 'description-orange'}`}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="history_button">
      {historyData.length > 4 && (
        <button className="view-more-button" onClick={handleToggle}>
          {showAll ? 'Show Less' : 'View More'}
        </button>
      )}
      </div>
    </div>
  );
};

export default History;
