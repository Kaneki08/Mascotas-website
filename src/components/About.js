import React from 'react';
import Roadmap from '../img/RoadMap.png'


function About() {
    return (
      <div className="about">
        <div class="container">
          <div class="row align-items-center my-5">
            </div> 
            <div class="col-lg-5">
              <h1 class="font-weight-light">About</h1>
              <p class="font-link"> 
                Programming languages: Solidity, React JS, Java Script
                Game Genre: Platform and Endless Running 
              </p>
            </div>
            <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={Roadmap}
                alt="roadmap"
                width="700" height="100"
              />
          </div>
        </div>
    );
  }
  
export default About;

// function About(){
// return (
// <h1>About
// </h1>
// );
// }

// export default About;