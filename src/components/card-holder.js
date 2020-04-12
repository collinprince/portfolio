import React from 'react';
import ProjectCard from './project-card.js';


class CardHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={holderStyles} >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        )
    }
}

const holderStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around',
}

export default CardHolder;