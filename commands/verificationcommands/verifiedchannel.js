module.exports = ({
    name: "vchannel",
    aliases: ['verifiedchannel'],
    code: `
    $title[**__Verified Channel Set__**]
    $description[$username has set the " **VERIFICATION CHANNEL** " to <#$mentionedChannels[1]>, Now the " $getServerVar[Prefix]Verify " will only be allowed in <#$mentionedChannels[1]>.]
    $setServerVar[vchannel;$mentionedChannels[1]]
    $setServerVar[vsetup1;🟢]
    $onlyPerms[managechannels;❌ Must have " **MANAGE_CHANNELS** " permissions to use this command.]
    $onlyIf[$mentionedChannels[1]!=;❌ Must mention a " #CHANNEL " to set this to.]
    $setServerVar[config;$sum[$getServerVar[config];1]]
    $deletecommand
    $if[$getServerVar[config]==4;$setServerVar[vstats;🟢]]
    $endif
    $color[$getServerVar[Hex]]

    `
})