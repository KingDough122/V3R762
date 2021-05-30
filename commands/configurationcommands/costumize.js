module.exports = ({
    name: "customize",
    aliases: ['custom'],
    code: `
    $title[**__Customizations__**]
    $description[
    **$getServerVar[Prefix]Setprefix | Prefix " New Prefix Here "**
*~ Changes the current prefix to the new one that's stated.*
    **$getServerVar[Prefix]Hex " #Hex Code Here " MUST ADD " # "**
*~ Changes the embeded message color of your server to the new one stated.*
       ** - More Coming Soon**
    ]
$color[$getServerVar[Hex]]

    `
})