import React from "react";
import roadmap from "../data/roadmap.json";
import "./Roadmap.css"; // Optional custom styles

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1>Python in 30 Days</h1>
      {roadmap.weeks.map((week) => (
        <div key={week.week} className="week-card">
          <h2>Week {week.week}: {week.focus}</h2>
          <ul className="day-list">
            {week.days.map((day) => (
              <li key={day.day} className="day-item">
                <strong>Day {day.day}:</strong> {day.topic}
                <p>{day.task}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
