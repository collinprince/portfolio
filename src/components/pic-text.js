import React from 'react';
import {Col} from 'react-bootstrap';
import MyPicture from '../assets/sit.jpg'

class PicText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            small: false,
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

    render() {

        const bigContainer = {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: this.state.small ? "column" : "row",
        }

        const imgBoxStyle = {
            height: "100%",
            width: this.state.small ? "100%" : "50%",
            display: "flex",
            flexDirection: this.state.small ? "row" : "column",
            justifyContent: "center",
        }

        const picStyle = {
            height: "90%",
            width: "90%",
        }

        const textBoxStyle = {
            height: "95%",
            width: this.state.small ? "100%" : "50%",
            marginTop: "5vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
            
        }

        return(
            <div style={bigContainer}>
                <div style={imgBoxStyle}>
                    <img src={MyPicture} style={picStyle}/>
                </div>
                <div style={textBoxStyle}>
                    <div style={textSectionStyle}>
                        Tech and software engineering, whether it be personal projects, work,
                        or school, is my main focus and passion. I love to hone my craft
                        through working on full stack projects, learning new languages
                        and frameworks, and constantly learning more about software engineering.
                        When I'm not coding and doing school work,
                        you can find me hanging out with friends and family.
                    </div>
                    <div style={textSectionStyle}>
                        One of my favorite things in life is listening to music.
                        Some of my favorite genres include Indie Rock, Alt, and Rap,
                        and at any given time you can reasonably guess that my Spotify 
                        is either playing Tame Impala or the Pollen playlist. 
                    </div>
                    <div style={textSectionStyle}>
                        Since I was a kid, I've always loved reading and
                        still try to dedicate as much free time as I can to
                        reading now. I've focused more on reading American Literature
                        as I've gotten older, with Hemingway being my favorite author. 
                    </div>
                </div>
            </div>
        );
    }
}

const textSectionStyle = {
    height: "auto",
    margin: "2%",
    textAlign: "center",
    fontSize: "1.5rem",
}

export default PicText;