import React, {useContext} from "react";
import "./Stats.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Stats() {
  const {isDark} = useContext(StyleContext);

  const statsData = [
    {
      number: "50+",
      title: "Business Problems Solved",
      icon: "fas fa-lightbulb",
      color: "#ffc107" // Yellow/Gold
    },
    {
      number: "2+",
      title: "Years Experience",
      icon: "fas fa-briefcase",
      color: "#667eea" // Blue-Purple
    },
    {
      number: "30%",
      title: "Performance Boost",
      icon: "fas fa-rocket",
      color: "#ff6b6b" // Coral/Red
    },
    {
      number: "5+",
      title: "Team Members Mentored",
      icon: "fas fa-users",
      color: "#4ecdc4" // Teal
    }
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="stats-main">
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={isDark ? "stat-card dark-mode" : "stat-card"}
              style={{"--stat-color": stat.color}}
            >
              <i className={`${stat.icon} stat-icon`}></i>
              <h1 className="stat-number">{stat.number}</h1>
              <p className="stat-title">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
