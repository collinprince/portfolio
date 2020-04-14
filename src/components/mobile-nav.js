import React from 'react';
import Resume from '../assets/CollinPrince_Resume.pdf';

class MobileNav extends React.Component {

    render() {
        return(
            <div style={navStyle}>
                <div style={navItemStyle}>
                    <button style={navButtonStyle} onClick={()=> this.props.onClick(0)}>
                        Projects
                    </button>
                </div>
                <div style={navItemStyle}>
                    <button style={navButtonStyle} onClick={()=> this.props.onClick(1)}>
                        Experience
                    </button>
                </div>
                <div style={navItemStyle}>
                <a href={Resume} >
                        <button style={navButtonStyle}  onClick={()=> this.props.onClick(2)}>
                        Resume
                        </button>
                        </a>
                    
                </div>
                <div style={navItemStyle}>
                    <button style={navButtonStyle} onClick={()=> this.props.onClick(3)}>
                        Education
                    </button>
                </div>
                <div style={navItemStyle}>
                    <button style={navButtonStyle} onClick={()=> this.props.onClick(4)}>
                        About Me
                    </button>
                </div>
            </div>
        );
    }
}

var navStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: "10vh",
    width: "100%",
    top: 0,

}

var navItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
    width: "30%",
    
}

var navButtonStyle = {
    border: "solid gray 1px",
    borderRadius: "5px",
    //backgroundColor: "#16c988",
    backgroundColor: "white",
    width: "100%",
    height: "80%",
    color: "black",
    fontSize: "1rem"
}


export default MobileNav;