import React from 'react';
import PhotoCollage from '../photo-collage.js';

class EducationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: false,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let curMobile = (window.innerWidth <= 500);
        if (curMobile !== this.state.mobile) {
            this.setState({mobile: curMobile});
        }
    }

    render() {

        const textBoxStyle = {
            height: this.state.mobile ? "60vh" : "45vh",
            paddingTop: '2%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }

        return(
            <div style={{backgroundColor: '#f6f7eb'}}>
                <div style={{marginTop: "5%",}}>
                    <PhotoCollage />
                </div>
                <div style={textBoxStyle}>
                    <div style={textStyle}>
                    I am a Computer Science major at the University of California, Los Angeles.
                    I am lucky to have taken classes covering Operating Systems Principles, Software Design, and Objected Oriented Programming.
                    I love learning about new topics and research in computer science, and look forward to taking more coursework on topics
                    covering machine learning, AI, and other cutting edge areas of computer science.
                    </div>
                </div>
            </div>
        );
    }
}



const textStyle = {
    fontSize: '2rem',
    lineHeight: '1.5',
}

export default EducationPage;