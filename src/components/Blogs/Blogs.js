import React from "react";
import CommingSoon from "../../assets/img/commingSoon.png";

const Blogs = () => {
  return (
    <section class='resume-section' id='blogs'>
      <div class='resume-section-content'>
        <h2 class='mb-0'>Blogs</h2>
        <div className='container'>
          <img style={{ height: "580px" }} src={CommingSoon} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
