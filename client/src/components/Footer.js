import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faAngleUp } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <>
      <footer className='foo'>
        <div className='container py-3'>
          <div className='row justify-content-center'>
            <div className='col-md-12 text-center'>
              <span>
                <img src='/assets/LOGO2.png' className="img-fluid logo-image" alt='measuring scale law logo' />
                <img src='/assets/component.png' className="img-fluid px-0 logo-text" alt='alina marin cabinet de avocatura si insolventa' />
              </span>
              <div className='menu my-3'>
                <a href='/' className='p-2 text-decoration-none text-light'>Acasa</a>

                <a href='/avocatura' className='p-2 text-decoration-none text-light'>Avocatura</a>
                <a href='/insolventa' className='p-2 text-decoration-none text-light'>Insolventa</a>
                <a href='/informatii-utile' className='p-2 text-decoration-none text-light'>Informatii utile</a>
                <a href='/contact' className='p-2 text-decoration-none text-light'>Contact</a>
              </div>

              <div className="footer-social " >
                <span className='fs-3'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                    title="av_alinamarin@yahoo.com"
                    size="1x"
                  />
                </span>
                <span className="fs-3">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                    size="1x" />
                </span>
                <span className="fs-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    title="+40769 935 716"
                    size="1x" />
                </span>
              </div>
            </div>
          </div>
          <button className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }>
            <FontAwesomeIcon icon={faAngleUp} className="icon" />
          </button>
          <div className='row mt-5'>
            <div className='col-md-12 text center'>
              <p className='copyright'>©2023 Avocat Marin Alina, Bucuresti, Romania</p>

            </div>
          </div>
        </div>
        <div id='whatsapp-icon' className="elfsight-app-9ac8bd49-4149-4bd4-9a06-e2987e3c3e60"></div>
      </footer >
    </>
  )
}

export default Footer
