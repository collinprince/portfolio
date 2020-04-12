import React from 'react';
import Background from '../logo.svg'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            hovered: false,
            mobile: true,
        };
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked,
        });
    }

    handleHover(bool) {
        this.setState({
            hovered: bool,
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let curMobile = (window.innerWidth <= 400);
        if (curMobile !== this.state.mobile) {
            this.setState({mobile: curMobile});
        }
    }

    render() {
        const cardStyle = {
            width: this.state.mobile ? "40%" : "30%",
            height: "300px",
            transitionDuration: ".2s",
            borderStyle: "solid",
            borderColor: "blue", 
            borderRadius: "10px",
            backgroundImage : `url(${Background})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transform: this.state.hovered ? 'scale(1.1)' : 'scale(1)',
            margin: "1%",
        }
        // cardStyle.transform = this.state.hovered ? "scale(1.1)" : "scale(1)";

        return (
            <div 
            style={cardStyle} 
            onClick={()=> this.handleClick()}
            onMouseEnter={()=> this.handleHover(true)}
            onMouseLeave={()=> this.handleHover(false)}
            >
                <div style={titleStyle}>
                    <h2 style={textStyle}>Project Name</h2>
                </div>
            </div>
        )
    }
}

// function smallerThan400() {
//     if (document.getElementById('root').clientWidth < 400) {
//         return true;
//     } else {
//         return false;
//     }
// }



const titleStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center", 
    width: "100%", 
    height: "20%", 
}

const textStyle = {
    background: "rgb(204, 204, 204, 0.5)",
    textAlign: "center",
    width: "80%",
    opacity: "1",
    padding: "1%",
}

// function getCardWidth() {
//     if (window.innerWidth < 400) {
//         return "50%";
//     } else {
//         return "25%";
//     }
// }

export default ProjectCard;