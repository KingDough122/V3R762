module.exports = ({
    name: "botinfo",
    aliases: ['binfo', 'botinformation'],
    code: `
$title[**__Bot Information__**]
$description[Hello, I am V3R762 Bot.
**• Command Ping:**
 $ping
**• Bot Version:**
 $getVar[version]'
**• Bot's Memory**
 $ram  | 650GB
**• ServerPrefix**
 " $getServerVar[Prefix] " help
**• ServerHex**
 $getServerVar[Hex]
**• Time without update:**
- $uptime
**• Pending Update:**
 $getVar[pupdate]
**• Scheduled Maintenance:**
 $getVar[downtime]
**• Support Server:** 
 [V3R672 SUPPORT](https://discord.gg/xQTWxH6EJ4)
**• Bot Invite:**
 [V3R672 BOT INVITE](https://discord.com/oauth2/authorize?client_id=817631308691013642&scope=bot&permissions=2147483647)
]
$deletecommand
$color[$getServerVar[Hex]]

    `
})