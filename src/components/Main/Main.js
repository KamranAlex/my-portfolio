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
      <div class='container-fluid p-0'>
        <About />
        <hr class='m-0' />
        <Skills />
        <hr class='m-0' />
        <Projects />
        <hr class='m-0' />
        <Blogs />
        <hr class='m-0' />
        <Educations />
        <hr class='m-0' />
        <Contact />
        <hr class='m-0' />
      </div>
    </div>
  );
};

export default Main;
