import React from "react";
import CommingSoon from "../../assets/img/commingSoon.png";

const Blogs = () => {
  return (
    <section className='resume-section' id='blogs'>
      <div className='resume-section-content'>
        <h2 className='mb-0'>Blogs</h2>
        <div className='container'>
          <img style={{ height: "580px" }} src={CommingSoon} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
