module.exports = ({
    name: "suggest",
    aliases: ['sug', 'suggests'],
    code: `
    $title[**__New Suggestion__**]
    $description[
> **Suggestion: $noMentionMessage**
> **Suggested**  By: $username
 - SuggestionID: 
 > **$messageID**
    ]
$addReactions[✔️;❌]
$useChannel[$getServerVar[schannel]]
$setMessageVar[suggestion;$noMentionMessage;message[1]]
$setMessageVar[suggestionID;$randomString[4];$message[1]]
$onlyIf[$getServerVar[sstats]==🟢;❌ Must setup the suggestion channel in configuration.]
$cooldown[5s;❌ Please wait " %time% " to use this command]

    
    `
})