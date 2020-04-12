import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CardHolder from './components/card-holder.js';
import SideBar from './components/sidebar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return(
    <Container style={{margin: "0", padding: "0", width: "100%", maxWidth: "none"}}>
      <Col sm={2} style={{paddingLeft: "0"}}>
        <SideBar md={2} />
      </Col>
      <Col sm={10}>
        <CardHolder md={10}/>
      </Col>
    </Container>

  )
}

// const pageStyles = {
//   width: '95vw',
//   margin: '1vh 2.5vw',
// }

export default App;
