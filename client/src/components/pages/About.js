import React from 'react';



const About = ({title, icon}) => {
  return(
    <div >
      <h1>About This App</h1>
      <p className="my-1">
        This is a Full Stack React app for safely storing your contacts.
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  )
}


export default About;