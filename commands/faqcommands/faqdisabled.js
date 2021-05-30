module.exports = ({
    name: "faqdisable",
    aliases: ['fdisble', 'faqdis'],
    code: `
    $title[**__Faq Editing Disabled**]
    $decsription[$username has disabled faq editing, This mean's when you do "$getServerVar[Prefix]faqNumber Message" This will not change the faq's.]
    $setServerVar[fenabled;Off]
    $setServerVar[fdisable;On]
    $onlyIf[$getServerVar[fdisable]==On;❌ This module is already Disabled do this.]
    $color[$getServerVar[Hex]]
    $onlyForIDs[761934943458295888;❌ Coming soon.]
    $deletecommand


    `
})