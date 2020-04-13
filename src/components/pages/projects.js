import React from 'react';
import CardHolder from '../card-holder.js';


function ProjectPage() {
    return(
        <CardHolder cards={projectCardPairs} />
    )
}

const proj1 = 'Hello. This is a test of how this will display. '
+ 'I built this website because I wanted to update my personal site. '
+ 'I like React a hell of a lot better than using html and css so far.'

const proj2 = 'hi';
const proj3 = 'hey';
const proj4 = 'heyo';
const proj5 = 'yeet';
const proj6 = 'yuh';
const projectCardPairs = [
  {name: 'project 1', text: proj1},
  {name: 'project 2', text: proj2},
  {name: 'project 3', text: proj3},
  {name: 'project 4', text: proj4},
  {name: 'project 5', text: proj5},
  {name: 'project 6', text: proj6},
]

export default ProjectPage;