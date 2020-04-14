import React from 'react';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
        let curMobile = (window.innerWidth <= 600);
        if (curMobile !== this.state.mobile) {
            this.setState({mobile: curMobile});
        }
    }

    render() {
        const cardStyle = {
            width: this.state.mobile ? "40%" : "30%",
            height: this.state.mobile ? "30%" : "40% ",
            transitionDuration: ".2s",            
            borderRadius: "10px",
            backgroundColor: this.props.bgColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transform: this.state.hovered ? 'scale(1.1)' : 'scale(1)',
            margin: "1%",
            marginTop: "2.5%",
        }

        return (
            <div 
            style={cardStyle} 
            onClick={()=> this.props.onClick()}
            onMouseEnter={()=> this.handleHover(true)}
            onMouseLeave={()=> this.handleHover(false)}
            >
                <div style={titleStyle}>
                    <h2 style={textStyle}>{this.props.name}</h2>
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
    wordWrap: "break-word",
}

const textStyle = {
    background: "rgb(204, 204, 204, 0.5)",
    textAlign: "center",
    width: "95%",
    opacity: "1",
    padding: "1%",
}

export default ProjectCard;