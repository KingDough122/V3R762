module.exports = ({
    name: "SetSuggestionchannel",
    aliases: ['SSC', 'SetSugC', 'SetSugChannel', 'SuggestionChannel', 'suggestChannel'],
    code:  `
    $title[**__Suggestion Channel Set__**]
    $description[
> Suggestion channel has now been set.
> Channel: <#$mentionedChannels[1]>
> Mod | Admin: $username
 - Action  has been completed.]
 $color[$getServerVar[Hex]]
$onlyPerms[managechannels;❌ Must have " Manage Channels " permissions to use this command.]
$onlyIf[$mentionedChannels[1]!=;❌ You must mention an channel to set this to. ]
$setServerVar[schannel;$mentionedChannels[1]]
$setServerVar[sstats;🟢]
    `
})