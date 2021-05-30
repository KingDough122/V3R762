module.exports = ({
    name: "support commands",
    aliases: ['supportmodule', 'supportcommands'],
    code: `
    $title[**__Support Server Command Module__**]
    $description[
• **$getServerVar[Prefix] Faq [ Number ]**
 - Gets the saved Faq's [ Frequently Asked Questions. ]
• **$getServerVar[Prefix] Points**
 - Checks your Tokens for [ Support Points and More. ]
• **$getServerVar[Prefix] New**
 - Opens an support ticket for private support.
> • These Commands WILL NOT work anywhere else but the support server.]
$onlyForServers[818201484822708226;]    
$color[$getServerVar[Hex]]
$suppressErrors[This command does not exist.]

    `
})