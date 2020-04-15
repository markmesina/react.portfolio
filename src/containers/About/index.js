import React from 'react';
import Headshot from './../../assets/images/headshot.jpg'

const About = props => (

    <div className="container">

        <h2>About me</h2>

        <hr />

        <img src={Headshot} className="float-left" alt="headshot" />

        <p>
            Mark Mesina, Bachelor of Science major in Business Management.
            2 years of experience in Accounting and Bookkeeping. 7 years of experience in Restaurant Business Management. A young professional with an arsenal of experience and education, always striving for success and attention to detail. I pride myself on coming from humble beginnings.
        </p>
        <p>
            Eldest of 6 siblings, born a natural leader with a strong moral compass foundation. I have take consideration of ethical consequences parallel to processes and standards within the establishment. I break down my leadership tactics into 3 crucial roles: Develop people, manage the processes and upholding standards.
        </p>
        <p>
            Currently undergoing Coding Bootcamp at UC Berkeley, I am aiming to get into the ever dynamic industry of Technology. Starting with learning Full Stack Coding, I hope to break into the Web Development Field and learn more about the languages involving Programming Web Pages, Applications and Data Science we use in our everyday lives.
        </p>


    </div>
)


export default About;