import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-heading">Skills</div>
          <div className="skills-bar">
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill-card-progress">
                  <div className="skill-header-progress">
                    <span className="skill-name-progress">{exp.Stack}</span>
                    <span className="skill-percentage-progress">{exp.progressPercentage}</span>
                  </div>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
