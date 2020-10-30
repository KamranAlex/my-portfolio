import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className='resume-section' id='skills'>
      <div className='resume-section-content'>
        <h2 className='mb-2'>Skills</h2>
        <div className='subheading mb-3'>Programming Languages & Tools</div>
        <div className='wrap'>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              HTML <abbr>85%</abbr>{" "}
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              CSS<abbr>80%</abbr>
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              Bootstrap<abbr>77%</abbr>
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              React JS<abbr>72%</abbr>
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              Redux<abbr>65%</abbr>
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              Express JS<abbr>60%</abbr>
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              NoSQL<abbr>58%</abbr>
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              SQL<abbr>40%</abbr>
            </h5>
            <span></span>
          </div>
          <div className='bar'>
            <h5 style={{ textTransform: "none" }}>
              PHP<abbr>30%</abbr>
            </h5>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
