import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Projects from "../Projects/Projects";
import Educations from "../Educations/Educations";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <div>
      <Header />
      <div className='container-fluid p-0'>
        <About />
        <hr className='m-0' />
        <Skills />
        <hr className='m-0' />
        <Projects />
        <hr className='m-0' />
        <Blogs />
        <hr className='m-0' />
        <Educations />
        <hr className='m-0' />
        <Contact />
        <hr className='m-0' />
      </div>
    </div>
  );
};

export default Main;
