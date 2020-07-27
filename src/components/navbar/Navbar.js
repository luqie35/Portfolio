import React from "react";

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg  navbar-dark scrolling-navbar'
      id='mainNav'
    >
      <div className='container'>
        <a className='navbar-brand js-scroll-trigger' href='#page-top'>
          LUQMAAN FORTUNE
        </a>
        <button
          className='navbar-toggler navbar-toggler-right'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto my-2 my-lg-0'>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#skills'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#testimonials'>
                Testimonials
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
