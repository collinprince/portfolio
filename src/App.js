import React from 'react';
import './App.css';
import SideBar from './components/sidebar.js';
import { Container, Row, Col } from 'react-bootstrap';
import MobileNav from './components/mobile-nav.js'
import ProjectPage from './components/pages/projects.js';
import ExperiencePage from './components/pages/experience.js';
import EducationPage from './components/pages/education.js';
import AboutPage from './components/pages/about.js';
import LinkBar from './components/link-bar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small: false,
      curPage: 4,
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

  mobileLinks() {
    return(
      <div style={{height: "10vh", marginBottom: "1vh",}}>
        <LinkBar />
      </div>
    )
  }

  renderPage() {
    const i = this.state.curPage;
    if (i === 0) {
      return (<ProjectPage />);
    } else if (i === 1) {
      return (<ExperiencePage />);
    } else if (i === 3) {
      return (<EducationPage />);
    } else if (i === 4) {
      return (<AboutPage />);
    } else {
      return (<AboutPage />);
    }
  }

  render() {
    return(
      <Container style={pageStyles}>
        <Row style={{height: "100%", marginLeft: 0, marginRight: 0}}>
          <Col sm={3} style={{padding: "0"}}>
            {this.renderNav()}
          </Col>
          <Col sm={9} style={{height: "auto" /*this.state.small ? "auto" : "100vh"*/}}>
            {this.renderPage()}
          </Col>
        </Row>
        {this.state.small ? this.mobileLinks() : null}
      </Container>
    );
  }
}



const pageStyles = {
  margin: "0", 
  padding: "0", 
  width: "100%", 
  maxWidth: "none", 
  fontFamily: "'Montserrat', sans-serif", 
  height: "100%", 
  minHeight: "100vh",
  backgroundColor: "#f6f7eb",
}

export default App;
