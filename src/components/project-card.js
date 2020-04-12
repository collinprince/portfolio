import React from 'react';
import './project-card.css';
import Background from '../logo.svg'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            hovered: false,
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

    render() {
        const cardStyle = {
            width: this.state.hovered ? "220px" :"200px",
            height: this.state.hovered ? "320px": "300px",
            transitionDuration: ".2s",
            borderStyle: "solid",
            borderColor: "blue", 
            backgroundImage : `url(${Background})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
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
    opacity: "1",
}
export default ProjectCard;