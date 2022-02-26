import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/Logo.png';


function Navigation() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-red bg-warning">
          <div className="container">
            <NavLink className="navbar-brand" to="/" ><img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={logo}  alt="trying" width="50" height="25"
            />
              Mascotas App
            </NavLink>

            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
export default Navigation;

// function Navigation() {
//     return(
//         <div>
//             <li>
//            <NavLink to ="/">
//             Home
//            </NavLink>
//            </li>
//            <li>
//                 <NavLink to="/About">
//                     About
//                 </NavLink>
//            </li>
//            <li>
//                 <NavLink to="/Contact">
//                     Contact
//                 </NavLink>
//            </li>
//            </div>
//     );
// }

//     //     <Nav
//     //     activeKey="/home"
//     //     onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//     //   >
//     //     <Nav.Item>
//     //       <Nav.Link href="/home">Active</Nav.Link>
//     //     </Nav.Item>
//     //     <Nav.Item>
//     //       <Nav.Link eventKey="link-1">Link</Nav.Link>
//     //     </Nav.Item>
//     //     <Nav.Item>
//     //       <Nav.Link eventKey="link-2">Link</Nav.Link>
//     //     </Nav.Item>
//     //     <Nav.Item>
//     //       <Nav.Link eventKey="disabled" disabled>
//     //         Disabled
//     //       </Nav.Link>
//     //     </Nav.Item>
//     //   </Nav>
        
// //     )
// // }

// export default Navigation;
