module.exports = ({
    name: "changelog",
    aliases: ['clog', 'fixes'],
    code: `
    $title[**__V3R762 Changlog__**]
    $description[> **Version**: $getVar[version]       
$getVar[changelog]]
    $color[$getServerVar[Hex]]
    `
})