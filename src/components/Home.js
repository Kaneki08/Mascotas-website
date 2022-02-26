import React from 'react';
import mascotas from '../../src/img/mascotas.png';
import fount from '../App.css';

function Home() {
  return (
    <div className="home">
        
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
          <h1 class="font-weight-light">Our Game ♡ </h1>
            <p class="font-link">
            Our game will help make a connection between pets and people. Just by choosing the character(pet) you want to play as, you will be able to obtain an exclusive Nft of that character, this will also support
            that specific mascota by supporting better living conditions they will have in the place they are being shelterd.
            </p> 
          </div>
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={mascotas}  alt="trying"
            />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Home;

// function Home(){
// return (
//     <div>
// <h1>Home</h1>
// <iframe src="https://giphy.com/embed/pFuQkU1HWZ4khyVYFt" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen/>
// </div>
// );
// }

// export default Home;
