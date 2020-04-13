import React from 'react';
import './App.css';
import SideBar from './components/sidebar.js';
import { Container, Row, Col } from 'react-bootstrap';
import MobileNav from './components/mobile-nav.js'
import ProjectPage from './components/pages/projects.js';
import ExperiencePage from './components/pages/experience.js';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small: false,
      curPage: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }



  resize() {
    let isSmall = this.state.small;
    if (window.innerWidth > 755) {
      isSmall = false;
    } else {
      isSmall = true;
    }

    if (isSmall !== this.state.small) {
      this.setState({small: isSmall});
    }
  }

  navClick(i) {
    if (i !== this.state.curPage) {
      this.setState({
        curPage: i,
      })
    }
  }

  renderNav() {
    return (this.state.small ?  
      <MobileNav onClick={(i) => this.navClick(i)} /> 
      : <SideBar onClick={(i) => this.navClick(i)} />);
  }

  renderPage() {
    const i = this.state.curPage;
    if (i === 0) {
      return (<ProjectPage />);
    } else if (i === 1) {
      return (<ExperiencePage />);
    } else {
      return null;
    }
  }

  render() {
    return(
      <Container style={{margin: "0", padding: "0", width: "100%", maxWidth: "none", fontFamily: "'Montserrat', sans-serif", height: "100%", backgroundColor: "#f6f7eb"}}>
        <Row style={{height: "100%", marginLeft: 0, marginRight: 0}}>
          <Col sm={3} style={{padding: "0"}}>
            {this.renderNav()}
          </Col>
          <Col sm={9} style={{height: "100vh"}}>
            {this.renderPage()}
          </Col>
        </Row>
      </Container>
    );
  }
}



// const pageStyles = {
//   width: '95vw',
//   margin: '1vh 2.5vw',
// }

export default App;
