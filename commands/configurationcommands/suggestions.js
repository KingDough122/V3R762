module.exports = ({
    name: "suggestions",
    aliases: ['config suggest', 'config suggestions'],
    code: `
    $title[**__Suggestions Configuration Module__**]
    $description[  
> **SetSuggestionChannel** 
 - Sets the channel to where all suggestions will go.

> **Suggest ( #Suggestion )**
 - Sends an suggestion to the suggestion channel.

> **DeclineSuggestion** ( ID )  [ Coming Soon ]
 - Declines the Suggestion from the provided ID. 

    ]
    
    `
})