import React from 'react'
import prof from '../assets/prof.png'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={outerStyles}>
                <div style={picContainerStyles}>
                    <img src={prof} style={picStyles}></img>
                </div>
            </div>
        )
    }
}

const outerStyles = {
    paddingLeft: "0",
    height: "100vw",
    width: "100%",
    backgroundColor: "#DCDCDC",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    
}

const picContainerStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
}

const picStyles = {
    width: "80%",
    height: "30vh",
    aspectRatio: 1.5,

}

export default SideBar;