import React from "react";
import "./Projects.css";
import CreativeAgency from "../../assets/projects/Creative Agency .png";
import DoctorsPortal from "../../assets/projects/Doctors-Portal.png";
import VolunteerNetwork from "../../assets/projects/Volunteer-network.png";
import TravelGuru from "../../assets/projects/travel-guru.png";

const Projects = () => {
  return (
    <section class='resume-section' id='projects'>
      <div class='resume-section-content'>
        <h2 class='mb-1'>projects</h2>
        <div class='projects'>
          <div class='all-projects'>
            {/* Project-1 */}
            <div class='project-item'>
              <div class='project-info'>
                <h3>Creative Agency</h3>
                <h4>Full-stack app to Order Creative Services</h4>
                <div className='project-features'>
                  <ul>
                    <li>
                      User can order for a Creative Service from the Available
                      Service.
                    </li>
                    <li>Access Controlled Dashboard for User & Admin</li>
                    <li>User can view order status from user Deshboard.</li>
                    <li>
                      Admin can Update order status and can also Create New
                      Service.
                    </li>
                  </ul>
                </div>
                <div className='project-btns'>
                  <a
                    className='btn-danger live-btn'
                    href='https://creative-agency-d3172.firebaseapp.com/'
                  >
                    Live
                  </a>
                  <a
                    className='btn-success code-btn'
                    href='https://github.com/KamranAlex/creative-agency'
                  >
                    Code
                  </a>
                </div>
              </div>
              <div class='project-img'>
                <img src={CreativeAgency} alt='img' />
              </div>
            </div>

            {/* Project-2 */}
            <div class='project-item'>
              <div class='project-img'>
                <img src={DoctorsPortal} alt='img' />
              </div>
              <div class='project-info'>
                <h3>Doctors Portal</h3>
                <h4>Full-stack website to Make and Manage Appoinments</h4>
                <div className='project-features'>
                  <ul>
                    <li>
                      Patients Can view available slot to make appointment by
                      date.
                    </li>
                    <li>
                      User/Patient has to provide personal info to make an
                      appointment.
                    </li>
                    <li>Admin/Doctor View all patients and appointments.</li>
                    <li>Admin/Doctor can add a new doctor to the system.</li>
                  </ul>
                </div>
                <div className='project-btns'>
                  <a
                    className='btn-danger live-btn'
                    href='https://doctors-portal-8165f.web.app/'
                  >
                    Live
                  </a>
                  <a
                    className='btn-success code-btn'
                    href='https://github.com/KamranAlex/doctors-portal'
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project-3 */}
            <div class='project-item'>
              <div class='project-info'>
                <h3>Volunteer Network</h3>
                <h4>
                  Encourage people to Participate in different social tasks
                </h4>
                <div className='project-features'>
                  <ul>
                    <li>
                      User/Volunteer can choose & select and event homepage.
                    </li>
                    <li>
                      User/Volunteer need to login with google in order to
                      register for an event.
                    </li>
                    <li>User/Volunteer can view his registerd events.</li>
                    <li>
                      Admin Can delete any registered user & also Create new
                      Event.
                    </li>
                  </ul>
                </div>
                <div className='project-btns'>
                  <a
                    className='btn-danger live-btn'
                    href='https://volunteer-network-98347.firebaseapp.com/'
                  >
                    Live
                  </a>
                  <a
                    className='btn-success code-btn'
                    href='https://github.com/KamranAlex/vounteer-network'
                  >
                    Code
                  </a>
                </div>
              </div>
              <div class='project-img'>
                <img src={VolunteerNetwork} alt='img' />
              </div>
            </div>

            {/* Project-4 */}
            <div class='project-item'>
              <div class='project-img'>
                <img src={TravelGuru} alt='img' />
              </div>
              <div class='project-info'>
                <h3>Travel Guru</h3>
                <h4>React App to Book a Tour</h4>
                <div className='project-features'>
                  <ul>
                    <li>Front-end focused app to Book for Tour.</li>
                    <li>
                      Used Google, Facebook Sign In along with Email
                      Registration and Login.
                    </li>
                    <li>Used Google Map API to view Tourist Places</li>
                  </ul>
                </div>
                <div className='project-btns'>
                  <a
                    className='btn-danger live-btn'
                    href='https://travel-guru-82e08.web.app/'
                  >
                    Live
                  </a>
                  <a
                    className='btn-success code-btn'
                    href='https://github.com/KamranAlex/travel-guru'
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
