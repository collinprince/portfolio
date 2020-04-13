import React from 'react'
import prof from '../assets/prof.png'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let curMobile = (window.innerWidth <= 780);
        if (curMobile !== this.state.mobile) {
            this.setState({mobile: curMobile});
        }
    }

    render() {
        const outerStyles = {
            paddingLeft: "0",
            height: this.state.mobile ? "100vh" : "100vh",
            width: "100%",
    //        backgroundColor: "#c6c6c6",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            borderRadius: "7px",
            color: "black",
            position: "relative"
            
        }

        const picContainerStyles = {
            width: "100%",
            height: this.state.mobile ? "50%" : "30%",
            marginTop: "3vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        }
        
        const picStyles = {
            width: this.state.mobile ? "50%" : "70%",
            height: "100%",
            aspectRatio: 1.5,
            borderRadius: "4px",
        
        }

        const listContainer = {
            height: this.state.mobile ? "40%" : "60%",
        }

        const listStyle = {
            listStyleType: "none",
            paddingLeft: "0",
            height: "100%",
            
        }
        
        
        return (
            
            <div style={outerStyles}>
                <div style={picContainerStyles}>
                    <img alt="Collin Prince" src={prof} style={picStyles}></img>
                </div>
                <div style={listContainer}>
                    <ol style={listStyle} >
                        <li style={listItemStyle}>
                            <div style={divListItem}>
                                <button style={buttonStyle} onClick={()=> this.props.onClick(0)}>
                                    Projects
                                </button>
                            </div>
                        </li>
                        <li style={listItemStyle}>
                            <div style={divListItem}>
                                <button style={buttonStyle} onClick={()=> this.props.onClick(1)}>
                                    Experience
                                </button>
                            </div>
                        </li>
                        <li style={listItemStyle}>
                            <div style={divListItem}>
                                <button style={buttonStyle} onClick={()=> this.props.onClick(2)}>
                                    Resume
                                </button>
                            </div>
                        </li>                        
                        <li style={listItemStyle}>
                            <div style={divListItem}>
                                <button style={buttonStyle} onClick={()=> this.props.onClick(3)}>
                                    Education
                                </button>
                            </div>
                        </li>
                        <li style={listItemStyle}>
                            <div style={divListItem}>
                                <button style={buttonStyle} onClick={()=> this.props.onClick(3)}>
                                    About Me
                                </button>
                            </div>
                        </li>
                    </ol>

                </div>
            </div>

        )
    }
}

const listItemStyle = {
    height: "19%",
    marginTop: "1vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"        
}

const divListItem  = {
    height: "40%",
    
}

const buttonStyle = {    
    border: "solid 1px",
    borderColor: "gray",
    borderRadius: "5px",
    backgroundColor: "white",
    //backgroundColor: "#16c988",    
    width: "60%",
    height: "100%",
    color: "black",
}



export default SideBar;