import React from "react";

const Educations = () => {
  return (
    <section className='resume-section' id='education'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Education</h2>
        <div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
          <div className='flex-grow-1'>
            <h3 className='mb-0'>
              Metropolitan University, Sylhet, Bangladesh
            </h3>
            <div className='subheading mb-3 text-primary'>
              Bachelor of Science
            </div>
            <div>Computer Science and Engineering</div>
            <p>CGPA: 3.72</p>
          </div>
          <div className='flex-shrink-0'>
            <span className='text-primary'>August-2020</span>
          </div>
        </div>
        <div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
          <div className='flex-grow-1'>
            <h3 className='mb-0'>Sylhet Govt. Collage</h3>
            <div className='subheading mb-3 text-primary'>
              Higher Secondary Certificate
            </div>
            <div>Science</div>
            <p>GPA: 3.74</p>
          </div>
          <div className='flex-shrink-0'>
            <span className='text-primary'>September-2013</span>
          </div>
        </div>
        <div className='d-flex flex-column flex-md-row justify-content-between'>
          <div className='flex-grow-1'>
            <h3 className='mb-0'>Rajnagar Ideal High School</h3>
            <div className='subheading mb-3 text-primary'>
              Secondary School Certificate
            </div>
            <div>Science</div>
            <p>GPA: 5.00</p>
          </div>
          <div className='flex-shrink-0'>
            <span className='text-primary'>April-2011</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;
