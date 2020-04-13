import React from 'react';
import CardHolder from '../card-holder.js';

function ExperiencePage() {
    return(
        <CardHolder cards={pairs} bgColor="#35CE8D" />
    )
}


const name1 = 'Indy TeleData';
const name2 = 'IDEMIA';
const name3 = 'SBB Research Group';
const exp1 = 'Haha IndyTeleData';
const exp2 = 'Haha IDEMIA';
const exp3 = 'Haha SBB Research Group';


const pairs = [
    {name: name1, text: exp1},
    {name: name2, text: exp2},
    {name: name3, text: exp3},
]

export default ExperiencePage;