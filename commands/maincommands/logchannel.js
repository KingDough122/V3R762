module.exports = ({
    name: "loggingchannel",
    aliases: ['lchannel', 'logchannel', 'logschannel'],
    code: `
    $title[**__Logging Channel Set__**]
    $description[$username has set the logging channel to " <#$mentionedChannels[1]> this means logging is now activated; Deleted and edited messages will now be logged.]
    $setServerVar[logging;On]
    $color[$getServerVar[Hex]]
    $deletecommand
    $setServerVar[logs;$mentionedChannels[1]]
    $onlyIf[$mentionedChannels[1]!=;❌ Must mention an channel to set logging to.]
    $onlyPerms[managechannels;❌ Must have " **MANAGE_CHANNELS** " permissions to set the logging channel.]
    `
})