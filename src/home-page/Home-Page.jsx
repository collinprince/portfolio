import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import HomeTitle from "../components/home-page/HomeTitle";
import HoverCardGrid from "../components/home-page/HoverCardGrid";
import AboutMe from "../about-me/About-Me";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import ForFun from "../for-fun/For-Fun";
import ContactBar from "../components/home-page/ContactBar";
import BackButton from "../components/BackButton";

const HomePage = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Router forceRefresh>
      {pathname === "/" ? <HomeTitle /> : <></>}
      {pathname === "/" ? <HoverCardGrid /> : <></>}
      {pathname === "/" ? <></> : <BackButton />}

      <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/fun" component={ForFun} />
      </Switch>
      <ContactBar />
    </Router>
  );
};

export default HomePage;
