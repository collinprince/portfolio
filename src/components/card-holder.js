import React from 'react';
import ProjectCard from './project-card.js';


class CardHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleClick(text) {
        if (text !== this.state.text) {
            this.setState({
                text: text
            });
        }
    }

    renderCard(newKey, nameVal, text) {
        return (
            <ProjectCard 
            bgColor = {this.props.bgColor}
            key={newKey}
            onClick={() => this.handleClick(text)}
            name={nameVal}
            />
        );
    
    }

    

    render() {
        return (
            <div style={{height: "100vh"}}>
                <div style={holderStyles} >
                    
                    {this.props.cards.map((elem, index) => this.renderCard(index, elem.name, elem.text))}
                </div>
                <div style={displayText}>
                    {this.state.text}
                </div>
            </div>
        );
    }
}

const holderStyles = {
    width: "100%",
    height: "68%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    // marginTop: "2vh",
}

const displayText = {
    width: "100%",
    height: "30%",
    // marginTop: "2%",
    textAlign: "center",
    fontSize: "2rem",
}

export default CardHolder;