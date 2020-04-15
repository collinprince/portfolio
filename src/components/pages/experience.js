import React from 'react';
import CardHolder from '../card-holder.js';

function ExperiencePage() {
    return(
        <CardHolder cards={pairs} bgColor="#006992" />
    )
}
//006992
//og: 35CE8D

const name1 = 'SBB Research Group';
const name2 = 'IDEMIA';
const name3 = 'Indy Tele Data';
const name4 = 'Bruin Entrepreneurs';
const name5 = 'Creative Labs';

const exp1 = 'This Summer of 2020, I will be working as a Software Engineering Intern for SBB Research Group in Chicago, focusing on full stack development.';

const exp2 = 'During the Summer of 2019, I interned with IDEMIA as a Software Engineering Intern at their Minneapolis office. '
+ "At IDEMIA, I worked on the Driver's License Web Enrollment Team, with most of my work focusing on writing automation software using "
+ "TypeScript, Node.js, and Protractor. This gave me an in-depth knowledge of ensuring a quality UI experience. "
+ 'In addition, I learned MSSQL and used this knowledge to test our databases and ensure data was being transferred and stored correctly. '
+ "I also took part in the team's Agile-Scrum workflow and gained experience with this work style.";

const exp3 = 'In the Summer of 2016, I served as an Information Technology Intern for IndyTeleData. '
+ "In this internship, I gained valuable experience with the physical infrastructure of technology, gaining hands-on experience " 
+ "in managing a large, building wide network infrastructure and how to setup/image computers for organizations. "
+ "I also attained experience in working with clients in personal meetings, dynamically problem solving their issues and ensuring their IT needs were met. ";

const exp4 = 'Since I began as a freshman at UCLA in the fall of 2018, I have been a board member of Bruin Entrepreneurs. '
+ "Through this student organization, I've gained experience in web development through developing websites for the club and multiple "
+ "events we have put on, such as 1000 Pitches and Designathon. In addition, I gained experience in managing large teams and events, "
+ "serving as the Co-Director of 1000 Pitches UCLA in 2019, in which I facilitated acquiring thousands of dollars in sponsorships, "
+ "coordinating with student startup founders, leading a planning committee, faciliating marketing with our marketing team, and planning and MC'ing our final event. "
+ "This organization has given me an amazing community of mentors and friends at UCLA.";

const exp5 = 'I have worked with Creative Labs teams as a software developer over multiple quarters in my time at UCLA. '
+ "My most recent project was an app built with React Native and utilizing the Viro AR library to facilitate a virtual art show "
+ "that was supposed to be occur at UCLA in the spring of 2020. Unfortunately, due to COVID-19, these plans were derailed, but I still am "
+ "happy to have been a part of this project and gain new experience in developing a React Native app and using AR. I also worked to develop animations "
+ "for a series of educational videos in another Creative Labs project during my Freshman Year. Creative Labs has opened my student experience to a wide array of "
+ "incredibly creative individuals and the chance to work with exciting new development technology.";

const pairs = [
    {name: name1, text: exp1},
    {name: name2, text: exp2},
    {name: name3, text: exp3},
    {name: name4, text: exp4},
    {name: name5, text: exp5},
]

export default ExperiencePage;