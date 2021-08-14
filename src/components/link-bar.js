import React from 'react';
import LinkedIn from '../assets/linkedin.png';
import GitHub from '../assets/github.png';

function LinkBar() {
    return(
        <div style={linksList}>
            <a href="https://www.github.com/collinprince" style={linkItem}>
                <img alt='Github' style={linkItemPic} src={GitHub}/>
            </a>
            <a href="https://linkedin.com/in/collinprince1" style={linkItem}>
                <img alt='LinkedIn' style={linkItemPic} src={LinkedIn}/>
            </a>
        </div>
    );
}

const linksList = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}

const linkItem = {
    height: '100%',
    width: '15%',
    marginLeft: '5%',
    marginRight: '5%',
}

const linkItemPic = {
    height: '100%',
    width: '100%',
}

export default LinkBar;
