import React from 'react'


const Header = () => {
  return (
    <>
          <section
              data-bs-version="5.1"
              className="menu menu2 cid-ubqjZlZAxk"
            //   once="menu"
              id="menu-5-ubqjZlZAxk"
          >
              <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                  <div className="container">
                      <div className="navbar-brand">
                          <span className="navbar-logo">
                              <a href="https://upflairs.com/in-campus-training-institute-jaipur/">
                                  <img
                                      src="public/images/u logo.png"
                                      alt="Mobirise Website Builder"
                                      style={{ height: "4.3rem" }}
                                  />
                              </a>
                          </span>
                          <span className="navbar-caption-wrap">
                              <a
                                  className="navbar-caption text-black display-4"
                                  href=""
                              >
                                  <b>Upflairs</b>
                              </a>
                          </span>
                      </div>
                      <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-bs-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarNavAltMarkup"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <div className="hamburger">
                              <span />
                              <span />
                              <span />
                              <span />
                          </div>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                              <li className="nav-item">
                                  <a
                                      className="nav-link link text-black display-4"
                                      href="src\Notes.html"
                                  >
                                      Notes
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a
                                      className="nav-link link text-black display-4"
                                      href="src\Video.html"
                                      aria-expanded="false"
                                  >
                                      Videos
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a
                                      className="nav-link link text-black display-4"
                                      href="src\Material.html"
                                  >
                                      Materials
                                  </a>
                              </li>
                          </ul>
                          <div className="navbar-buttons mbr-section-btn">
                              <a className="btn btn-primary display-4" href='/login'>
                                  Access Now
                              </a>
                          </div>
                      </div>
                  </div>
              </nav>
          </section>

    </>
  )
}

export default Header