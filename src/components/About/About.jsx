import React from 'react'
import './About.css'
import { Typography } from '@mui/material'

const About = ({about}) => {
  return (
    <div className="about">
    <div className="aboutContainer">
      <Typography>This is a qoute</Typography>
    </div>
    <div className="aboutContainer2">
      <div>
        <img src="C:\Users\fujitsu\Desktop\Portfolio\frontend\src\images\WhatsApp Image 2024-01-14 at 12.00.44_8cbd0d99.jpg" alt="Ahmad" className="aboutAvatar" />

        <Typography
          variant="h4"
          style={{ margin: "1vmax 0", color: "black" }}
        >
          Ahmad Ayub
        </Typography>

        <Typography>Mern Stack Developer</Typography>

        <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
          I am a Mern Stack Web Developer
        </Typography>
      </div>

      <div>
        <Typography
          style={{
            wordSpacing: "5px",
            lineHeight: "50px",
            letterSpacing: "5px",
            textAlign: "right",
          }}
        >
         A MERN stack developer is a professional who specializes in building web applications using a combination of four key technologies: MongoDB, Express.js, React.js, and Node.js. This stack is renowned for its versatility, efficiency, and scalability, making it a popular choice for developing modern and dynamic web applications.
        </Typography>
      </div>
    </div>
  </div>
  )
}

export default About
