import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Typography variant = "h5">About me</Typography>
        <Typography>
       Hey, My name is Ahmad Ayub, I am a <b>Mern Stack Developer</b>.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/meabhisingh/" target="black">
          <BsGithub />
        </a>
        <a href="https://instagram.com/meabhisingh/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/meabhisingh/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>    
  )
}

export default Footer
