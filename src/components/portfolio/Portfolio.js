import React, { Fragment } from "react";
import Project_1 from "../images/proj_1.png";
import Project_2 from "../images/proj_2.png";
import Project_3 from "../images/proj_3.png";

const Portfolio = () => {
  return (
    <Fragment>
      <header className='masthead'>
        <div className='container h-100'>
          <div className='row h-100 align-items-center justify-content-center text-center'>
            <div className='col-lg-10 align-self-end'>
              <h1 className='text-uppercase text-white font-weight-bold'>
                LUQMAAN FORTUNE
              </h1>
              <hr className='divider my-4' />
            </div>
            <div className='col-lg-8 align-self-baseline'>
              <p className='text-white-75 font-weight-light mb-5'>
                Yip thats me. A junior developer who loves IT...
              </p>
              <a
                className='btn btn-primary btn-xl js-scroll-trigger'
                href='#about'
              >
                About
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className='page-section bg-primary' id='about'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 '>
              <h2 className='text-white mt-0'>
                So let me tell you abit of myself...
              </h2>
              <hr className='divider light my-4' />
              <p className='text-white-50 mb-4'>
                <h5>
                  I'm a dedicated and creative person. I like thinking out the
                  box and being different. I can be a quiet person that enjoys
                  analyzing my surroundings and vibe I'm in. I take challenges
                  on in different ways to see different outcomes and always
                  change things up. Respect is key for me and I'm family
                  orientated as I am where I am today due to them and how i was
                  raised.
                </h5>

                <h4>Date of Birth: 2001 06 November</h4>
                <h4>Gender: male</h4>
                <h4>Location (suburb): southern suburbs</h4>
                <h4>Willing to relocate: No</h4>
              </p>
              <a
                className='btn btn-light btn-xl js-scroll-trigger'
                href='#skills'
              >
                Skills
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='page-section-01 bg-secondary' id='skills'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='text-white mt-0'>Strenths and Weakness</h2>
              <hr className='divider light my-4' />
              <p className='text-white-50 mb-4'>
                <h2>Ratings</h2>
                <h3>FRONTEND-80%</h3>
                <h3>BACKEND-60%</h3>
                <h3>REACT-60%</h3>
                <h3>TO BE CONTINUED</h3>
              </p>
              <a
                className='btn btn-light btn-xl js-scroll-trigger'
                href='#testimonials'
              >
                Testimonial
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='page-section' id='testimonials'>
        <div className='container'>
          <h2 className='text-center mt-0'>Testimonials</h2>
          <hr className='divider my-4' />
          <div className='row'>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-bullseye text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Jason Wandrag</h3>
                <p className='text-muted mb-0'>
                  Luqmaan is a jovial and family oriented man, as well as a
                  patient and creative developer, who gets along well with
                  others.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-bullseye text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Chelsea Erispe</h3>
                <p className='text-muted mb-0'>
                  I can easily say Luqmaan has tremendous perserverance and
                  knows where he is going. He always the end goal in mind and
                  works his way to it, no matter how long it takes or how hard
                  it may be.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-bullseye text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Simba</h3>
                <p className='text-muted mb-0'>
                  Luqmaan is a critical thinker, an excellent problem-solver and
                  concise individual. His passionate and his work is
                  remarkable.He will be a great addition to any team.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-bullseye text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Jaabir Esau</h3>
                <p className='text-muted mb-0'>
                  Luqmaan Fortune is one inspiring story. His a great guy to
                  have on your team. Luqmaan always tries to get his team
                  members to work together. He is a all well rounded guy to
                  have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id='projects'>
        <h2 className='text-center mt-0'>Projects</h2>
        <hr className='divider my-4' />
        <div className='container-fluid p-0'>
          <div className='row no-gutters'>
            <div className='col-lg-4 col-sm-6'>
              <a
                className='portfolio-box'
                href='https://github.com/luqie35/github-finder-react'
              >
                <img className='img-fluid' src={Project_1} alt='' />
                <div className='portfolio-box-caption'>
                  <div className='project-name'>github-finder</div>
                </div>
              </a>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <a
                className='portfolio-box'
                href='https://github.com/luqie35/ContactKeeper-Project'
              >
                <img className='img-fluid' src={Project_2} alt='' />
                <div className='portfolio-box-caption'>
                  <div className='project-name'>contact-keeper</div>
                </div>
              </a>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <a
                className='portfolio-box'
                href='https://github.com/luqie35/it-logger'
              >
                <img className='img-fluid' src={Project_3} alt='' />
                <div className='portfolio-box-caption'>
                  <div className='project-name'>it-logger </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className='page-section' id='contact'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='mt-0'>Details</h2>
              <hr className='divider my-4' />
              <p className='text-muted mb-5'>Give me a call or send an email</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 ml-auto text-center mb-5 mb-lg-0'>
              <i className='fas fa-phone fa-3x mb-3 text-muted'></i>
              <div>061 417 4800</div>
            </div>
            <div className='col-lg-4 mr-auto text-center'>
              <i className='fas fa-envelope fa-3x mb-3 text-muted'></i>

              <a className='d-block' href='...'>
                luqie35@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-light py-5'>
        <div className='container'>
          <div className='small text-center text-muted'>
            Created by - Luqmaan Fortune
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Portfolio;
