import React from 'react';
import CardHolder from '../card-holder.js';


function ProjectPage() {
    return(
        <CardHolder cards={projectCardPairs} bgColor="#e5446d"/>
    )
}

//og: ED8642
//possible: eca400
//

const proj1 = 'I built this site using React, a first attempt at learning the framework for myself. '
+ 'I previously made a personal site, but was unsatisfied with the look of the site and thought this would be a fun update to make.'
+ 'I built my old website using Angular, and it has been an eye opening and hugely beneficial experience for myself. ' 
+ 'I personally really love React after building this site, but I am happy to have experience with both Angular and React under my belt.'

const proj2 = 'QuaranComfort was a site I built during the first few weeks of quarantine as a way to see how friends and other people '
+ 'in my age group were feeling during isolation. I built the front end of the site using HTML, CSS, and JavaScript. '
+ 'To implement the backend, I used PHP to read in input from the user and then I used MySql to store and sort this data. '
+ 'I also developed experience with deployment on AWS, as my site and database were hosted on AWS. ' 
+ 'Through this project, I gained critical experience with full stack development that I plan to leverage in developing more web apps in the future.';

const proj3 = 'Stock Sampler is a small program I wrote to gain experience with Python and Pandas. '
+ 'This program reads in CSV stock data and then sorts them into decile buckets based on the features of the stock (such as PE Ratio, EPS, etc).'
+ 'The program then attempts to sort these stocks into random smaples based on these decile buckets, using a KS test from the SciPy package.';

const proj4 = 'Zombie Dash is a zombie hunting game built with C++. This was a project for my CS 32 class at UCLA that allowed me to leverage '
+ 'my skills in object-oriented programming, polymorphism, inheritance, and data structures. '
+ 'Through working on this as my first large scale programming project, I learned valuable lessons in managing a project with complex '
+ 'inheritance trees and passing objects between different functions and classes cleanly and efficiently.';

const proj5 = 'The Bruin Entrepreneurs website was my first attempt at developing a production level website using HTML, CSS, and JavaScript. '
+ "Working with mentorship from other team members, I was able to develop much of the site including the landing page and animation, team page, and the 'What we Do' page "
+ 'This project taught me a huge less in web development and working on a software engineering team.';

const projectCardPairs = [
  {name: 'This site!', text: proj1},
  {name: 'Quaran Comfort', text: proj2},
  {name: 'Stock Sampler', text: proj3},
  {name: 'Zombie Dash', text: proj4},
  {name: 'BE Website', text: proj5},
]

export default ProjectPage;