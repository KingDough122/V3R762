module.exports = ({
    name: "faqenable",
    aliases: ['fenable', 'faqen'],
    code: `
    $title[**__Faq Editing Enabled__**]
    $decsription[$username has enabled faq editing, This mean's when you do "$getServerVar[Prefix]faqNumber Message" This will change the faq.]
    $setServerVar[fenabled;On]
    $setServerVar[fdisable;Off]
    $onlyIf[$getServerVar[fenable]==On;❌ This module is already enabled!]
    $onlyPerms[managemessages;❌ Must have " **MANAGE_MESSAGES* " to do this.]
    $color[$getServerVar[Hex]]
    $onlyForIDs[761934943458295888;❌ Coming soon.]
    $deletecommand


    `
})