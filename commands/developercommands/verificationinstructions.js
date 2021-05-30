module.exports = ({
    name: "say",
    aliases: ['saycmd'],
    code: `
$title[**__Verification Instructions__**]
$description[$noMentionMessage]
$onlyIf[$noMentionMessage!=;❌ Please type something to say.]
$onlyPerms[managemessages;❌ Must have " **MANAGE_MESSAGES** Permissions to use " Say " command.]
$color[$getServerVar[Hex]]
$deletecommand
    `
})