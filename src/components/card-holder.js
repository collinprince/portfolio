import React from 'react';
import ProjectCard from './project-card.js';


class CardHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            mobile: false,
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
        return (
            <div style={{height: "auto", minHeight: "100vh"}}>
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
    height: "68vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    // marginTop: "2vh",
}

const displayText = {
    width: "100%",
    height: "auto",
    marginTop: "3vh",
    marginBottom: "3vh",
    textAlign: "center",
    fontSize: "2rem",
}

export default CardHolder;