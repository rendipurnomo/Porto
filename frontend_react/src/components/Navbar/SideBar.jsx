import './SideBar.scss'
import { useState } from 'react';
import {images} from '../../constants';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegWindowClose,
} from "react-icons/fa"
import {
  FaHome,
  FaUser,
  FaReadme,
  FaEnvelope,
  FaSuitcase,
  FaBars,
} from "react-icons/fa"

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="nav-bar">
      <a
        className="logo"
        href="#home"
        onClick={() => setToggle(false)}>
        <img src={images.logo} alt="Logo" />
      </a>
      <nav className={toggle ? 'mobile-show' : ''}>
        <a 
          exact="true"
          activeclassname="active"
          href="#home"
          onClick={() => setToggle(false)}>
          <FaHome color="#fff" />
        </a>
        <a 
          activeclassname="active"
          className="about-link"
          href="#about"
          onClick={() => setToggle(false)}>
          <FaUser color="#fff" />
        </a>
        <a
          activeclassname="active"
          className="work-link"
          href="#work"
          onClick={() => setToggle(false)}
        >
          <FaSuitcase color="#fff" />
        </a>
        <a
          activeclassname="active"
          className="skills-link"
          href="#skills"
          onClick={() => setToggle(false)}
        >
          <FaReadme color="#fff" />
        </a>
        <a
          activeclassname="active"
          className="contact-link"
          href="#contact"
          onClick={() => setToggle(false)}
        >
          <FaEnvelope color="#fff" />
        </a>
        <FaRegWindowClose
          onClick={() => setToggle(false)}
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/rendipurnomo"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rendipurnomo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rendi_gital/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FaBars
          onClick={() => setToggle(true)}
          className='hamburger-icon' />
    </div>
  )
}

export default SideBar