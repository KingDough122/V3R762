module.exports = ({
    name: "help configure",
    aliases: ['config', 'configure'],
    code: `
    $title[**__Configuration Modules__**]
    $description[ > **Suggestions**
 - Suggestion Commands
Status: $getServerVar[sstats]
> **Verification**
Status: $getServerVar[vstats]

    ] 
$color[$getServerVar[Hex]]



    `
})