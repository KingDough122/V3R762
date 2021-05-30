module.exports = ({
    name: "disablelogging",
    aliases: ['dlogs', 'dlog', 'disablelogs'],
    code: `
    $title[**__Logging Disabled__**]
    $description[$username has disabled logging, Nothing will be logged now.]
    $color[$getServerVar[Hex]]
    $deletecommand
    $setServerVar[logging;off]
    $onlyPerms[managechannels;❌ Must have " **MANAGE_CHANNELS** " permissions to set the logging channel.]
    `
})