import React from 'react';
import PicText from '../pic-text.js';
import MyPicture from '../../assets/sit.jpg';

function AboutPage() {
    return (
        <PicText picture={MyPicture} title={title} textList={textSections}/>
    );
}

const title = "Hey! I'm Collin Prince."

const text1 = 'Tech and software engineering, whether it be personal projects, work, '
+ 'or school, is my main focus and passion. I love to hone my craft '
+ 'through working on full stack projects, learning new languages '
+ 'and frameworks, and constantly learning more about software engineering. '
+ "When I'm not coding and doing school work, "
+ 'you can find me hanging out with friends and family.';

const text2 = 'One of my favorite things in life is listening to music. '
+ 'Some of my favorite genres include Indie Rock, Alt, and Rap, '
+ 'and at any given time you can reasonably guess that my Spotify '
+ 'is either playing Tame Impala or the Pollen playlist.';

const text3 = "Since I was a kid, I've always loved reading and "
+ 'still try to dedicate as much free time as I can to '
+ "reading now. I've focused more on reading American Literature "
+ "as I've gotten older, with Hemingway being my favorite author.";


const textSections = [
    {text: text1},
    {text: text2},
    {text: text3},
]

export default AboutPage;