import React from 'react';
// import MyPicture from '../assets/sit.jpg'

class PicText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            small: false,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
      }
    
      resize() {
        let isSmall = this.state.small;
        if (window.innerWidth > 755) {
          isSmall = false;
        } else {
          isSmall = true;
        }
    
        if (isSmall !== this.state.small) {
          this.setState({small: isSmall});
        }
      }

    renderText(newKey, text) {
        return(
            <div key={newKey} style={textSectionStyle}>
                {text}
            </div>
        );
    }

    renderTitle() {
        return(
            <h1 style={{textAlign: "center"}}>{this.props.title}</h1>
        );
    }

    render() {

        const bigContainer = {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: this.state.small ? "column" : "row",
            marginTop: this.state.small ? "2vh" : "none",
        }

        const imgBoxStyle = {
            height: "100vh",
            width: this.state.small ? "100%" : "50%",
            display: "flex",
            flexDirection: this.state.small ? "row" : "column",
            justifyContent: "center",
        }

        const picStyle = {
            height: "90%",
            width: "90%",
        }

        const textBoxStyle = {
            height: "95vh",
            width: this.state.small ? "100%" : "50%",
            marginTop: "5vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
            
        }

        return(
            <div style={bigContainer}>
                <div style={imgBoxStyle}>
                    <img src={this.props.picture} alt='Me sitting' style={picStyle}/>
                </div>
                <div style={textBoxStyle}>
                    {this.state.small ? null : this.renderTitle()}
                    {this.props.textList.map((elem, index)=> this.renderText(index, elem.text))}
                </div>
            </div>
        );
    }
}

const textSectionStyle = {
    height: "auto",
    margin: "2%",
    textAlign: "center",
    fontSize: "1.5rem",
}

export default PicText;