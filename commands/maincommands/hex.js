module.exports = ({
    name: "Hex",
    aliases: ['color', 'hexcode'],
    code: `
    $title[**__Embeded Color Changed__**]
    $description[$username has set the Embeded Color for the bot's messages to " $noMentionMessage ".]
    $setServerVar[Hex;$noMentionMessage]
    $onlyIf[$isValidHex[$noMentionMessage]==false;> ❌ Error: " Invalid Hex ".]
    $onlyPerms[managemessages;❌ Must have **" MANAGE_MESSAGES " permissions to do this.]
    $color[$getServerVar[Hex]]
    $deletecommand

    `
})